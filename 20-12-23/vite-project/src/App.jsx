import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import AddPost from "./components/addPost";
import PostList from "./components/postList";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostListData(data.posts));
  }, []);

  const navLinks = [
    {
      url: "./",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
      alt: "logo",
      text: "",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
      alt: "home",
      text: "Home",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/bell.png",
      alt: "notification",
      text: "Notification",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios/32/FFFFFF/secured-letter--v1.png",
      alt: "messagges",
      text: "Messagges",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios/32/FFFFFF/list--v1.png",
      alt: "list",
      text: "List",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios-filled/32/FFFFFF/google-groups.png",
      alt: "community",
      text: "Community",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios-filled/32/FFFFFF/warranty-card.png",
      alt: "premium",
      text: "Premium",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/material-outlined/32/FFFFFF/contract-job.png",
      alt: "profile",
      text: "Profile",
    },
    {
      url: "./",
      icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/connection-status-off.png",
      alt: "others",
      text: "Others",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Navbar links={navLinks} />
        <Section />
      </div>
      <div className="post__container">
        <Header />
        <AddPost setPostListData={setPostListData} />
        <div className="posts">
          <PostList postListData={postListData} />
        </div>
      </div>
    </div>
  );
}

export default App;
