import {useState} from "react";
import styles from "./Form.module.css";

function Input(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    props.returnValue(e.target.value);
  }

  return (
    <>
      <label htmlFor={"email-input"} className={styles.label}>{props.label}</label><br/>
      <div className={styles.inputDiv}>
        <input
          type={props.type}
          className={styles.input}
          name={name}
          placeholder={props.label}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Input;
