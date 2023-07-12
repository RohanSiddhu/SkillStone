const Post = (props) => {
  return (
    <div id={props.id} className={"post"}>
      <p>{props.id}: {props.title}</p>
      <p>{props.body}</p>
      <button onClick={() => props.getComments(props.id)}>See Comments</button>
    </div>
  );
};

export default Post;
