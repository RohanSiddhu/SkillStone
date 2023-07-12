const Comment = (props) => {
  return (
    <p id={`comment-${props.id}`}>{props.id}: {props.body}</p>
  );
};

export default Comment;
