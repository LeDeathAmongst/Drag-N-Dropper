import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const { apiUrl } = require("../config/config.json");

export default function Reply({ reply: r, user, project, comment }) {
  const [author, setAuthor] = useState({});
  const [reply, setReply] = useState(r);
  const [newLike, setNewLike] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl + "/users")
      .then(({ data }) => setAuthor(data.find((u) => u.id === reply.authorId)));
  }, []);

  function delReply() {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "Are you sure you want to delete this reply?",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((r) => {
      if (!r.isConfirmed) return;

      axios
        .delete(
          apiUrl +
            `/comments/${project._id}/${comment._id}/replies/${reply._id}`,
          {
            headers: { Authorization: localStorage.getItem("disfuse-token") },
          }
        )
        .then(() => window.location.reload());
    });
  }

  function editReply() {
    Swal.fire({
      input: "textarea",
      confirmButtonText: "Edit",
    }).then((r) => {
      if (!r.isConfirmed) return;

      axios
        .patch(
          apiUrl +
            `/comments/${project._id}/${comment._id}/replies/${reply._id}`,
          { content: r.value },
          { headers: { Authorization: localStorage.getItem("disfuse-token") } }
        )
        .then(() => window.location.reload());
    });
  }

  function toggleLike() {
    axios
      .patch(
        apiUrl +
          `/comments/${project._id}/${comment._id}/replies/${reply._id}/likes`,
        null,
        {
          headers: {
            Authorization: localStorage.getItem("disfuse-token"),
          },
        }
      )
      .then(({ data }) => {
        if (data.likes.includes(user.id)) setNewLike(true);
        setReply(data);
      });
  }

  return (
    <>
      <div id={`${reply?._id}`} className="reply">
        <div className="top">
          <Link to={`/@${author.username}`}>
            <img src={author.avatar} alt="" />
            <h3>{author.username}</h3>
          </Link>
          <i>
            {new Date(reply.created).toLocaleString([], {
              dateStyle: "long",
              timeStyle: "short",
            })}
            {reply.oldContent?.length ? " (edited)" : ""}
          </i>
        </div>
        <div className="middle">{reply?.content}</div>
        <div className="bottom">
          <div
            onClick={toggleLike}
            className={`like${
              reply?.likes?.includes(user.id) ? " active" : ""
            }${newLike ? " newLike" : ""}`}
          >
            <i class="fa-solid fa-heart"></i>
            <div>{reply?.likes?.length}</div>
          </div>
          {user.id === author.id ? (
            <>
              <div onClick={editReply} className="edit">
                <i class="fa-regular fa-pen-to-square"></i>
              </div>
              <div onClick={delReply} className="delete">
                <i class="fa-solid fa-trash-can"></i>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
