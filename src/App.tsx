import "./App.css";
import { useEffect, useState, useTransition } from "react";
import bankerslogo from "./Icon/bankers.png";
import createPost, { getAll, LikePost, unLikePost } from "./db";

export function App() {
  const [hidden, setHidden] = useState(true);
  const [textV, setTextV] = useState("");
  const [onComment, setOncomment] = useState("commentMessage closed");
  useEffect(() => {
    if (!textV) {
      setHidden(true);
    }
  }, [textV]);

  return (
    <div className="wrapper">
      <div className="body">
        <div className="box">
          <div className="upperbox">
            <img className="bankers" src={bankerslogo} alt={bankerslogo} />
            Bankers Village 1 HomeOwners Association
          </div>
          <div className="lowerbox">
            <textarea
              className="textarea"
              value={textV}
              onChange={(e) => {
                setTextV(e.target.value);
                setHidden(false);
              }}
            ></textarea>
          </div>
          <div className="send" hidden={hidden}>
            <button
              onClick={() => {
                if (textV) {
                  createPost(textV);
                }
                setTextV("");
              }}
            >
              Post!
            </button>
          </div>
        </div>
        <div className="containerMessages">
          {getAll().map((post: any) => {
            const formattedDate = new Date(post.date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            });
            return (
              <div className="parentMessage">
                <div className="containerMessage">
                  <div className="userName">{formattedDate}</div>
                  <div className="message">{post.content}</div>
                  <div className="action">
                    <button>👍like</button>
                    <button>👎unlike</button>
                    <button onClick={() => {}}>💬Comment</button>
                    <button>➣Share</button>
                  </div>
                  <div hidden={hidden} className={onComment}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
