import "./Comment.css";

const Comment = (props) => {
  return (
    <p id={`comment-${props.id}`}
       className={"comments"}
    >
      {props.id}: {props.body}
    </p>
  );
};

export default Comment;
