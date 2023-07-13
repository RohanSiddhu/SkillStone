import {useState} from "react";
import Input from "./components/Input";
import Post from "./components/Post";
import Comment from "./components/Comment";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState(0);

  const getPosts = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  };

  const getComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));

    setPostId(postId);
  }

  const postList = posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      body={post.body}
      getComments={getComments}
    />
  ));

  const commentList = comments.map((comment) => (
    <Comment
      key={"comment"+comment.id}
      id={comment.id}
      body={comment.body}
    />
  ));

  const post = posts
    .filter(post => post.id === postId)
    .map((post) => (
      <div key={"comment-post"} className={"comment-post"}>
        <p>{post.id}: {post.title}</p>
        <p>{post.body}</p>
      </div>
    ));

  return (
    <div className={"App"}>
      <Input
        getPosts={getPosts}
      />
      <h2>Posts</h2>
      {postList}
      <br/><h2>Comments</h2>
      <div className={"comment-section"}>
        {post}
        {commentList}
      </div>
    </div>
  );
};

export default App;
