import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData }) => {
  const { title, body, tags, reactions, userId } = postData;
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const response = await fetch(`https://dummyjson.com/users/${userId}`);
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="Post">
      <h2>Author: {`${userData?.firstName} ${userData?.lastName}`}</h2>
      <img className="Profile__img" src={userData?.image} alt="Author Avatar" />
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>❤️</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
