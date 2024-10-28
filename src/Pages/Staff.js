import { Link } from 'react-router-dom';

export default function Staff() {
  return (
    <div className="staff-container">
      <h1>Drag N' Dropper Staff</h1>
      <div className="staff hidden">
        <Link to="https://github.com/LeDeathAmongst">
          <div>
            <img
              src="https://cdn.discordapp.com/avatars/1269563963994280038/bacbdc077434fd11b3643db489f63863.png?format=webp&quality=lossless&width=409&height=409"
              alt=""
            />
            <h3>Vanilla Viking</h3>
            <p>Owner</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
