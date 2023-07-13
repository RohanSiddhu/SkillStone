import "./Post.css";

const Post = (props) => {
  return (
    <div id={props.id} className={"post"}>
      <p className={"post-title"}>{props.id}: {props.title}</p>
      <p className={"post-body"}>{props.body}</p>
      <button className={"post-comment-btn"} onClick={() => props.getComments(props.id)}>See Comments</button>
    </div>
  );
};

export default Post;
