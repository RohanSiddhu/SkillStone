import {useState} from "react";
import styles from "./Form.module.css";
import Input from "./Input";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  function handleEmail(name) {
    setEmail(name);
  }

  function handlePassword(passwd) {
    setPassword(passwd);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend><h2 className={styles.legendH2}>Sign In</h2></legend>
        <Input
          type={"text"}
          label={"Email"}
          returnValue={handleEmail}
        />
        <Input
          type={"password"}
          label={"Password"}
          returnValue={handlePassword}
        />
        <button type={"submit"} className={styles.submitButton}>Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
