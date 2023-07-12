import {useState} from "react";
import "./Input.css";

const Input = (props) => {
  const [userId, setUserId] = useState("1");
  const [isValid, setIsValid] = useState(true);

  const handleUserId = (e) => {
    setUserId(e.target.value);
    let value = +e.target.value;
    setIsValid(!!value && 1 <= value && value <= 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      props.getPosts(+userId);
    }
  };

  let invalidMsg = isValid ? " " : "Invalid input!";

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={"input-userId"} className={"input-userId-lb"}>
        Enter a number between 1 to 10 (inclusive)
      </label>
      <div className={"input-div"}>
        <input
          type={"text"}
          id={"input-userId"}
          name={"userId"}
          value={userId}
          onChange={handleUserId}
        />
        <button type={"submit"} className={"submit-btn"}>Submit</button>
        <p id={"invalid-msg"}>{invalidMsg}</p>
      </div>
    </form>
  );
};

export default Input;
