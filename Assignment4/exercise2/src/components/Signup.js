import {useState} from "react";
import "./Signup.css"

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdRe, setPasswdRe] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleBirthDate(e) {
    setBirthDate(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handlePasswd(e) {
    setPasswd(e.target.value);
  }

  function handlePasswdRe(e) {
    setPasswdRe(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Name: ${firstName} ${lastName}\n
Birth Date: ${birthDate}\n
Gender: ${gender}\n
Phone: ${phone}\n
Password: ${passwd}
      `
    );

    setFirstName("");
    setLastName("");
    setBirthDate("");
    setGender("male");
    setPhone("");
    setPasswd("");
    setPasswdRe("");
  }

  return (
    <form className={"signupForm"} onSubmit={handleSubmit}>
      <h2 className={"formHeading"}>Sign Up</h2>
      <label className={"label"}>First Name</label>
      <div className={"inputDiv"}>
        <input
          type={"text"}
          className={"input"}
          name={firstName}
          onChange={handleFirstName}
        />
      </div>
      <label className={"label"}>Last Name</label>
      <div className={"inputDiv"}>
        <input
          type={"text"}
          className={"input"}
          name={lastName}
          onChange={handleLastName}
        />
      </div>
      <label className={"label"}>Birth Date</label>
      <div className={"inputDiv"}>
        <input
          type={"text"}
          className={"input"}
          name={birthDate}
          onChange={handleBirthDate}
        />
      </div>
      <div className={"inputDiv input-gender"}>
        <label className={"label-gender"}>Gender: </label>
        <div className={"radioDiv"}>
          <input
            type={"radio"}
            className={"radio"}
            name={"gender"}
            value={"male"}
            defaultChecked={true}
            onChange={handleGender}
          /> Male
        </div>
        <div className={"radioDiv"}>
          <input
            type={"radio"}
            className={"radio"}
            name={"gender"}
            value={"female"}
            defaultChecked={false}
            onChange={handleGender}
          /> Female
        </div>
        <div className={"radioDiv"}>
          <input
            type={"radio"}
            className={"radio"}
            name={"gender"}
            value={"other"}
            defaultChecked={false}
            onChange={handleGender}
          /> Other
        </div>
      </div>
      <label className={"label"}>Phone Number</label>
      <div className={"inputDiv"}>
        <input
          type={"text"}
          className={"input"}
          name={phone}
          onChange={handlePhone}
        />
      </div>
      <label className={"label"}>Password</label>
      <div className={"inputDiv"}>
        <input
          type={"password"}
          className={"input"}
          name={passwd}
          onChange={handlePasswd}
        />
      </div>
      <label className={"label"}>Confirm Password</label>
      <div className={"inputDiv"}>
        <input
          type={"password"}
          className={"input"}
          name={passwdRe}
          onChange={handlePasswdRe}
        />
      </div>
      <button type={"submit"} className={"submitBtn"}>Submit</button>
    </form>
  );
}

export default Signup;
