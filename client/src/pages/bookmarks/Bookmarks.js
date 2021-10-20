import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./bookmarks.css";

export default function Bookmarks() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/bookmarks/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [user._id]);

  return (
    <div>
      <Topbar />

      <div className="bodyContent">
        <Sidebar />
        <div className="gridBooks">
          {posts &&
            posts.map((c) => (
              <div className="grid-itemBooks">
                <Link to={`/${c._id}`}>
                  <img
                    onContextMenu="return false"
                    src={c.catNum}
                    alt=""
                    className="gridImgBooks"
                  />
                </Link>
                <Link className="linksbook" to={`/${c._id}`}>
                  <div className="title"> {c.title.slice(0, 1)}</div>
                  <div> {c.title.slice(1)}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
