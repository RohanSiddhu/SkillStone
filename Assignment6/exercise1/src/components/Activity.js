import {useState, useEffect} from "react";
import "./Activity.css";

const Activity = () => {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => setActivity(data.activity))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2 className="heading">Getting Bored! Here is something you can do.</h2>
      <p className="activity">{activity}</p>
    </>
  );
};

export default Activity;

