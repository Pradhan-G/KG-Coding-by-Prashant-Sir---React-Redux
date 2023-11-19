import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  let [time, setTime] = useState("");

  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
      .then((response) => {
        setTime(response.data.datetime);
      });
  });

  return (
    <div>
      <h2>This is the current time : {time}</h2>
    </div>
  );
};

export default Clock;
