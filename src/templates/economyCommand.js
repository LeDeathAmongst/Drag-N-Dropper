module.exports = {"blocks":{"languageVersion":0,"blocks":[{"type":"main_token","id":"Z;xE[:}:#_^a$:;*t/kP","x":-328,"y":-93,"inputs":{"token":{"block":{"type":"main_env","id":"7k$sO4ZUAAekQpnT^Ym]","inputs":{"value":{"block":{"type":"text","id":"Lj6q*.PTRRp]Ah~xerlX","fields":{"TEXT":"token"}}}}}}}},{"type":"main_ready","id":"9Mf#BNexvLA+B;OTxZ,s","x":-327,"y":-25,"inputs":{"event":{"block":{"type":"main_presence","id":"L%NBAvD?j~09Q1w8;?=V","fields":{"status":"online","activity_type":"3"},"inputs":{"afk":{"block":{"type":"logic_boolean","id":"H.q3RjE?bJN#yYZN-1xI","fields":{"BOOL":"FALSE"}}},"activity_name":{"block":{"type":"text","id":"a5]fkH!Nu*j9+bWS@P+q","fields":{"TEXT":"Made by TropicGalxy"}}}},"next":{"block":{"type":"slash_createcontainer","id":"a0hfpY2t?kfPs.ztT6_I","inputs":{"guild":{"block":{"type":"text","id":"r{:pD?Xj$6P:0s3m@{]_","fields":{"TEXT":""}}},"commands":{"block":{"type":"slash_create","id":"ygvT0iJ*#rx)B[V0W-dt","inputs":{"name":{"shadow":{"type":"text","id":"73mnCrh#_-Hh#%}f4LQj","fields":{"TEXT":"balance"}}},"dsc":{"shadow":{"type":"text","id":"P)4wKU,Bgh;]{Pw8M?2F","fields":{"TEXT":"Get you or someone elses balance"}}},"nsfw":{"shadow":{"type":"logic_boolean","id":"U@1#HgptSCFJErnDsSa9","fields":{"BOOL":"FALSE"}}},"dm":{"shadow":{"type":"logic_boolean","id":")5yG2dcKW,W-P.sLUYYt","fields":{"BOOL":"TRUE"}}},"options":{"block":{"type":"slash_addoption","id":"3pK`OE!?A}ObF#SyVp}A","fields":{"type":"6"},"inputs":{"name":{"block":{"type":"text","id":";+1B/R$Gl}YG,iDYz`z7","fields":{"TEXT":"member"}}},"dsc":{"block":{"type":"text","id":"ru[^7q!oo3pciz4,.wf#","fields":{"TEXT":"The member"}}},"required":{"block":{"type":"logic_boolean","id":"W|3BfAFE6)e-]txLzP(3","fields":{"BOOL":"FALSE"}}}}}}},"next":{"block":{"type":"slash_create","id":"]Lr^o{hv/|hsJPD)C5{w","inputs":{"name":{"shadow":{"type":"text","id":"}c8eV+.$h;9=9Xa(,jy|","fields":{"TEXT":"beg"}}},"dsc":{"shadow":{"type":"text","id":"]aqu[8E+/(+X(`?_feLU","fields":{"TEXT":"Beg for some money, hobo"}}},"nsfw":{"shadow":{"type":"logic_boolean","id":"q7HE8urf/m7tu(C`nW~%","fields":{"BOOL":"FALSE"}}},"dm":{"shadow":{"type":"logic_boolean","id":"hj:h?tl$K/3sw}#{H]$x","fields":{"BOOL":"TRUE"}}}}}}}}}}}}}}},{"type":"slash_received","id":"}*e]QKa;-PzWh@-7|w[D","x":-325,"y":1309,"inputs":{"event":{"block":{"type":"controls_if","id":"~(:_jPjAW|$Kdu=5I0If","inputs":{"IF0":{"block":{"type":"logic_compare","id":"eMZQ3dd!/NajV359/zHH","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"slash_name","id":"jL(lf6N@`N(=pXRC4/.S"}},"B":{"block":{"type":"text","id":"cAUmQLF%Sm3!1m_HP*!L","fields":{"TEXT":"balance"}}}}}},"DO0":{"block":{"type":"controls_if","id":"!f0[6a!N)^7lc((FB~Vf","extraState":{"elseIfCount":1},"inputs":{"IF0":{"block":{"type":"logic_compare","id":"g7k5~cAGT~k0MF.;OG(z","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"slash_getoption","id":"#}|nen^,GsvRMt$ulC7K","fields":{"type":"User"},"inputs":{"name":{"block":{"type":"text","id":"enI==r5k]iHDCW9A%OZ4","fields":{"TEXT":"member"}}}}}},"B":{"block":{"type":"logic_null","id":"b}$P@hJ5-9x@J7_wC!1v"}}}}},"DO0":{"block":{"type":"controls_if","id":";eZe5xk-jYHVkeTM$vHA","inputs":{"IF0":{"block":{"type":"logic_negate","id":"qTta~X)z1ls:#%utP$#b","inputs":{"BOOL":{"block":{"type":"db_has","id":"P6CuMxnPaj?VWWQ?)wml","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"3a,%FANb3d{|_q;2%,M1","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":",ns9q[Ut(:UT`9*Dp84]","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"bZ2@~gw7K?-B7u^q?LD@","inputs":{"member":{"block":{"type":"slash_user","id":"~mKIb}[=K~9CRr3snt{$"}}}}}}}}}}}}}},"DO0":{"block":{"type":"db_set","id":"-tL#[n$YY9n7#il~3J56","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"R9q-=B!ujmLG2B9_;;OE","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"h;8yv8RN[=R${mi23R}]","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"5hZN]5J$#T9WF$X1|^D|","inputs":{"member":{"block":{"type":"slash_user","id":"Rg%a(`-vqwDDO}?Q#C.*"}}}}}}}},"val":{"block":{"type":"math_number","id":"fG7`E15/2$;E:(Bo!pL~","fields":{"NUM":0}}}}}}},"next":{"block":{"type":"embed_create","id":"{kht3?,!Nk4l~bUhoAJ{","fields":{"name":"balance"},"inputs":{"config":{"block":{"type":"embed_settitle","id":"pMyHPk,*/8ifpouXYWe^","inputs":{"value":{"block":{"type":"text","id":"??63hCoCyhF)6xcFNER`","fields":{"TEXT":"The Bank"}}}},"next":{"block":{"type":"embed_setdsc","id":"?7Bf$s|Az%l=t5u|8lsj","inputs":{"value":{"block":{"type":"text_join","id":"|$x.Oy8BzGa$76=M1%o}","extraState":{"itemCount":4},"inputs":{"ADD0":{"block":{"type":"text_join","id":"e1mKsX$1~2RDb+[BF/4T","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"slash_user","id":"Wg:TLTR%wUhBFg8Rj|U^"}},"ADD1":{"block":{"type":"text","id":"la/~XBs$#HNV$gk9k^=n","fields":{"TEXT":"'s bank account:"}}}}}},"ADD1":{"block":{"type":"text_newline","id":"1+zyqDsV@pG(*TdY/.tN"}},"ADD2":{"block":{"type":"text_newline","id":"r0c0D{YKfOl`#FBjikSc"}},"ADD3":{"block":{"type":"text_join","id":"SWoqD94MG]64mtSq5t4$","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"db_get","id":"dLa+Hu9rmES`_KyJ;%]/","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"ZF#`NLoFan-U:!qFNVUl","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"*[N,e(z|(aR|{4Wu!m!l","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"/W9u.0~_q.q=YfmtHxbG","inputs":{"member":{"block":{"type":"slash_user","id":"Yy/wTwyE0;@P_5hb.UFn"}}}}}}}}}}},"ADD1":{"block":{"type":"text","id":"TgDS7MBW`_.ZQ/y;7x_^","fields":{"TEXT":"coins"}}}}}}}}}},"next":{"block":{"type":"embed_setcolor","id":"bzl76wiNXr(`:KvC(22Q","inputs":{"value":{"block":{"type":"colour_picker","id":"Td(H+w8{]+KjXOZ665ia","fields":{"COLOUR":"#6633ff"}}}},"next":{"block":{"type":"embed_settimestamp","id":"=;S|4pVYg$`x-ws6f9ze"}}}}}}}}},"next":{"block":{"type":"slash_reply","id":";1Y]Z}awEr:7mPLAvY8f","inputs":{"content":{"block":{"type":"text","id":"Xscf0qeQ^l5/p1aNy}5j","fields":{"TEXT":""}}},"embeds":{"block":{"type":"text","id":")ieiw?Qq5x0nE|dHvQr;","fields":{"TEXT":"balance"}}},"ephemeral":{"block":{"type":"logic_boolean","id":"l;;W$q2}=.!5/Ti`{5{=","fields":{"BOOL":"FALSE"}}}}}}}}}},"IF1":{"block":{"type":"logic_compare","id":"jrH4cuZa!-|u[np,A]c*","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"slash_getoption","id":"L-#5UA-MA|KyW![A~rjk","fields":{"type":"User"},"inputs":{"name":{"block":{"type":"text","id":"N2m-ve{IO{k4:p%+CW9z","fields":{"TEXT":"member"}}}}}},"B":{"block":{"type":"logic_null","id":"/U6?cDoQ{JC;7:3q3%]+"}}}}},"DO1":{"block":{"type":"controls_if","id":"|/%1G[Vnw!t.MBa$!J+;","inputs":{"IF0":{"block":{"type":"logic_negate","id":"[#XqX1bS]adgP[k~$7;m","inputs":{"BOOL":{"block":{"type":"db_has","id":"]92aXbS$2)3^s97L.Ks[","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"+D({dSAFJG]Q.r^17Smm","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"yOVk!@6LssC`RzhcXsBI","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"F=gA#?N7MNeHcM+aWQ=5","inputs":{"member":{"block":{"type":"slash_getoption","id":"A.c|,3=-kn*ueWlE6#gS","fields":{"type":"User"},"inputs":{"name":{"block":{"type":"text","id":"WyI+|v]gUUZ-8+PgdRm%","fields":{"TEXT":"member"}}}}}}}}}}}}}}}}}},"DO0":{"block":{"type":"db_set","id":"`G}sQ{j@5DyD?5^E}2j#","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"Lb.*NSI9f~G+aGkIwzH^","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"Mo~mu`zUIn3aKH=sb81a","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"a(E_30$VqbP230t~6D9S","inputs":{"member":{"block":{"type":"slash_getoption","id":"htxt%^,49!K!E:WW(-DU","fields":{"type":"User"},"inputs":{"name":{"block":{"type":"text","id":"ui[W*`n},ptGTBYN6w`J","fields":{"TEXT":"member"}}}}}}}}}}}},"val":{"block":{"type":"math_number","id":"pC6Ep8qQ,}#UR`H!4+Bm","fields":{"NUM":0}}}}}}},"next":{"block":{"type":"embed_create","id":"j(~9q+H#*jA/Fv(-.?n{","fields":{"name":"balance"},"inputs":{"config":{"block":{"type":"embed_settitle","id":"oQja:+13?epr/5sWW2@;","inputs":{"value":{"block":{"type":"text","id":"V5e9cN.60RGc/zEM/Al_","fields":{"TEXT":"The Bank"}}}},"next":{"block":{"type":"embed_setdsc","id":"8agh${r~f7RE?4?fN}yp","inputs":{"value":{"block":{"type":"text_join","id":"[Wiq]z$(,Ub~b$j;uEWZ","extraState":{"itemCount":4},"inputs":{"ADD0":{"block":{"type":"text_join","id":"@0^sN]}1TD9LSHQipiIh","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"slash_user","id":"_HaW|CASAy)d;((8%}5u"}},"ADD1":{"block":{"type":"text","id":"CDQZVMQY*kawmmw{WJBH","fields":{"TEXT":"'s bank account:"}}}}}},"ADD1":{"block":{"type":"text_newline","id":"+w+Y]#RS6eb!]egFyDE1"}},"ADD2":{"block":{"type":"text_newline","id":"a#OX7g%=CwT+[Wfqs~yi"}},"ADD3":{"block":{"type":"text_join","id":"Xt-`F/71-X0wbB+ihglh","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"db_get","id":"2J,ngNE{YfaDf-nTL*w_","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":",!o+*yW5n@;.C[bso6;9","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"Dp!@dv)T{2.ljrrc+j5#","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"bBnS2+ip;6`)28d+u-F0","inputs":{"member":{"block":{"type":"slash_getoption","id":"3?H!p=`QwE8K[$}ef%ky","fields":{"type":"User"},"inputs":{"name":{"block":{"type":"text","id":"]{y+mLz,9r(z9?N(6ytC","fields":{"TEXT":"member"}}}}}}}}}}}}}}},"ADD1":{"block":{"type":"text","id":"vP,S{U#u}-3|*yu{5a8@","fields":{"TEXT":"coins"}}}}}}}}}},"next":{"block":{"type":"embed_setcolor","id":";2wQkU-?CrQ)TF-m+mV6","inputs":{"value":{"block":{"type":"colour_picker","id":"[DMa:LM][JTM5%d{^!`]","fields":{"COLOUR":"#6633ff"}}}},"next":{"block":{"type":"embed_settimestamp","id":"%l^vaNg%W/MEX]?`Zm_C"}}}}}}}}},"next":{"block":{"type":"slash_reply","id":"~j1mJz%x1iXmW.5g?8d$","inputs":{"content":{"block":{"type":"text","id":"xA6zcAR_HNsP@+|2h`u|","fields":{"TEXT":""}}},"embeds":{"block":{"type":"text","id":"^2v]XJQ!AVx@F}gn%bkU","fields":{"TEXT":"balance"}}},"ephemeral":{"block":{"type":"logic_boolean","id":"mh^fg5Idr}43XY`A;%Df","fields":{"BOOL":"FALSE"}}}}}}}}}}}}}}}}}},{"type":"db_create","id":"#C[/CA56@lSRo=E_~)oY","x":-326,"y":-157,"fields":{"name":"coins","path":"coins"}},{"type":"slash_received","id":"KGjz+I8#LEuSR#T^eGcB","x":-321,"y":3865,"inputs":{"event":{"block":{"type":"controls_if","id":"0)!kmM,W:(TnV?gNmz$}","inputs":{"IF0":{"block":{"type":"logic_compare","id":"E,rS9|xSrSh/)yh2]:gX","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"slash_name","id":"pewDYjD2!n-Z}qxb(lRP"}},"B":{"block":{"type":"text","id":"hKd~X)=/H02adL?d(~P,","fields":{"TEXT":"beg"}}}}}},"DO0":{"block":{"type":"controls_if","id":"/YQie(@#@Hm]$R5LZ_I7","extraState":{"hasElse":true},"inputs":{"IF0":{"block":{"type":"logic_negate","id":"qscNjd)eXhhOA?*Y{P6U","inputs":{"BOOL":{"block":{"type":"db_get","id":".?xbnrsv+4t0z{cf*/@p","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"wEXH*erO3Ce=uYUgisJ=","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"P@f;X9LXf6mk%Ro@}?+t","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"-6e@9b)kIIof#_Z7Ja|c","inputs":{"member":{"block":{"type":"slash_user","id":"ly}FmRq#saWp.k3pi#[s"}}}}}}}}}}}}}},"DO0":{"block":{"type":"db_set","id":"WG!PH{[jlBf#+c((rEEX","fields":{"db":"coins"},"inputs":{"id":{"block":{"type":"text_join","id":"r+y(m+P(B^xQ~@L]e)L,","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"k#V|.Y@AzIT;9#k!csLF","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"QjF!$i:J!f[m.Y!hOJhs","inputs":{"member":{"block":{"type":"slash_user","id":"Gt#hZC[(5NA8,!P*^2~o"}}}}}}}},"val":{"block":{"type":"math_number","id":"REClPgaBl_r(#sq+WT*b","fields":{"NUM":0}}}}}},"ELSE":{"block":{"type":"variables_set","id":"0l|,Znx5p;^Z?W6BFcIB","fields":{"VAR":{"id":"S+1-.3#/kIFdKXr##qzR"}},"inputs":{"VALUE":{"block":{"type":"lists_getIndex","id":"#OK/1wkQhhnV8qd[P6Bj","fields":{"MODE":"GET","WHERE":"RANDOM"},"inputs":{"VALUE":{"block":{"type":"lists_create_with","id":"w)[pFUpq}K)njRvuW1L#","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"/to|Scrm(EJDZ}5uP)6z","fields":{"TEXT":"yes"}}},"ADD1":{"block":{"type":"text","id":"QJE15x.1j1N#wd-#`aaO","fields":{"TEXT":"no"}}}}}}}}}},"next":{"block":{"type":"controls_if","id":":z,bO?I[=b9FLFWAYsM%","extraState":{"elseIfCount":1},"inputs":{"IF0":{"block":{"type":"logic_compare","id":"BvS^~XM`n9^o.*D~v!L)","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"variables_get","id":"e|Sg(V1D)IA[[`3ynd@V","fields":{"VAR":{"id":"S+1-.3#/kIFdKXr##qzR"}}}},"B":{"block":{"type":"text","id":"5eIr,U8K_OcTL%e7+j$u","fields":{"TEXT":"yes"}}}}}},"DO0":{"block":{"type":"variables_set","id":"a3=4jjEHwS@FE=$pT+Lk","fields":{"VAR":{"id":"sc(,I^83uYRD76m$Jmdp"}},"inputs":{"VALUE":{"block":{"type":"math_random_int","id":"AUZSe*=HOFRC(`=_I5}^","inputs":{"FROM":{"shadow":{"type":"math_number","id":"lbmV?cnv}t)]OV?TVLiJ","fields":{"NUM":1}}},"TO":{"shadow":{"type":"math_number","id":"CFOGpt~?c;8hL^gW.5T4","fields":{"NUM":150}}}}}}},"next":{"block":{"type":"embed_create","id":"ciZ?T94/oK[IF!LM8N_9","fields":{"name":"beg"},"inputs":{"config":{"block":{"type":"embed_settitle","id":"Fj?kaGB!+Hx*ROB[U.$R","inputs":{"value":{"block":{"type":"text","id":"]+{@}A}/r3zveuyl8X*g","fields":{"TEXT":"Homeless Simulator:"}}}},"next":{"block":{"type":"embed_setdsc","id":"k[(,gt#0yeS0X!mF}G%e","inputs":{"value":{"block":{"type":"text_join","id":"3Qd91SC#.ROA.E_sK9yL","extraState":{"itemCount":3},"inputs":{"ADD0":{"block":{"type":"text","id":"aW8`3|+vS#A$WzFN;w=!","fields":{"TEXT":"You made "}}},"ADD1":{"block":{"type":"variables_get","id":"}L6mWc:^r^/ch@fy7^5D","fields":{"VAR":{"id":"sc(,I^83uYRD76m$Jmdp"}}}},"ADD2":{"block":{"type":"text","id":"~yw4/SDGATls?i{lG3SU","fields":{"TEXT":" while begging, maybe get a job you bum."}}}}}}},"next":{"block":{"type":"embed_setcolor","id":"WVmWUbp^IBLxJCp.3X28","inputs":{"value":{"block":{"type":"colour_picker","id":"moUl%5^s3=3nIlML!^#e","fields":{"COLOUR":"#6633ff"}}}},"next":{"block":{"type":"embed_settimestamp","id":"}{|#OXUE]`%n#aJwg+DT"}}}}}}}}},"next":{"block":{"type":"db_add","id":"s``i)DqM1Gk6kI2!Sbzd","fields":{"db":"coins"},"inputs":{"val":{"block":{"type":"variables_get","id":"Q*Da+Q!@c]Lginx2e/!7","fields":{"VAR":{"id":"sc(,I^83uYRD76m$Jmdp"}}}},"id":{"block":{"type":"text_join","id":"Glma!MU/AaC[S_0rD33f","extraState":{"itemCount":2},"inputs":{"ADD0":{"block":{"type":"text","id":"u,Q8FskjeJ6xR-iCT2#;","fields":{"TEXT":"coins-"}}},"ADD1":{"block":{"type":"member_id","id":"Gi$r,L+|mTh[N+GKnf{D","inputs":{"member":{"block":{"type":"slash_user","id":"W8t=bBT)[SJA4GxDS:i@"}}}}}}}}},"next":{"block":{"type":"slash_reply","id":"t}{qZ_B@w]x*q-EZ{S?!","inputs":{"content":{"block":{"type":"text","id":"N@ySrlqK4!07(8u]K;U$","fields":{"TEXT":""}}},"embeds":{"block":{"type":"text","id":"3{%OY!7u?zu*7)i{-xJ!","fields":{"TEXT":"beg"}}},"ephemeral":{"block":{"type":"logic_boolean","id":"C$CNho?6[crL-8h(CoBB","fields":{"BOOL":"FALSE"}}}}}}}}}}}},"IF1":{"block":{"type":"logic_compare","id":"9|a9|F}KTWdTA*VLyx,e","fields":{"OP":"EQ"},"inputs":{"A":{"block":{"type":"variables_get","id":"LB|n|mDgx:orJ[BuJpLI","fields":{"VAR":{"id":"S+1-.3#/kIFdKXr##qzR"}}}},"B":{"block":{"type":"text","id":"!,W5.Ab:XBB:+:2S-7B6","fields":{"TEXT":"no"}}}}}},"DO1":{"block":{"type":"slash_reply","id":"IiMP$q0w3w6!ao0byOZb","inputs":{"content":{"block":{"type":"text","id":"fvpk1,bE@!JAwx**$(BO","fields":{"TEXT":"*ahh!! dad, a hobo!!* You earned no money while begging and were beaten for being poor. "}}},"embeds":{"block":{"type":"text","id":"s7%uy7Yj5MG/1~Q`@CMT","fields":{"TEXT":""}}},"ephemeral":{"block":{"type":"logic_boolean","id":"?Bcvt.*rOd?QHg?%8i1V","fields":{"BOOL":"FALSE"}}}}}}}}}}}}}}}}}}},{"type":"comment_float","id":"HpmP=u{sfEKw4adok=I)","x":-322,"y":-216,"fields":{"TEXT":"Hope you guys enjoy! -- made by tropicgalxy"}}]},"variables":[{"name":"coins","id":":m`C[)nwgM^@pQWO|IWR"},{"name":"item","id":"D2dU{944yJfrbGJh^FG*"},{"name":"beg money","id":"sc(,I^83uYRD76m$Jmdp"},{"name":"beg pays out?","id":"S+1-.3#/kIFdKXr##qzR"},{"name":"command","id":"Pn[U+76ge:OOHvT`!*LV"},{"name":"reply","id":"S]ib.kcFQ!+yUG^(+(s+"}],"backpack":[]}