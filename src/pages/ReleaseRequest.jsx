import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ReleaseRequestStyle.css";

const ReleaseRequest = () => {
  const [state, setState] = useState({
    vendor: "",
    jobName: "",
    release: "",
    thruDate: ""
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (true) {
      // const message =
      window.alert(
        "Hello, can you please send me a" +
          ` ${state.release}` +
          " release through" +
          ` ${state.thruDate}` +
          " for" +
          ` ${state.jobName}` +
          "?"
      );
    }
  };

  return (
    <div className="ReleaseRequest">
      <h1>Release Request Generator</h1>
      <h2>
        Please enter the information needed to generate a release request:
      </h2>
      <button
        onClick={() => {
          navigate("/emails");
        }}
        className="emailbutton"
      >
        Click for Email Directory
      </button>

      <form>
        <input
          type="text"
          name="vendor"
          className="double"
          value={state.vendor}
          onChange={handleInput}
          placeholder="Vendor:"
        />
        <input
          type="text"
          name="jobName"
          className="double"
          value={state.jobName}
          onChange={handleInput}
          placeholder="Job:"
        />
        <input
          type="text"
          name="release"
          className="double"
          value={state.release}
          onChange={handleInput}
          placeholder="Type of Release:"
        />
        <input
          type="text"
          name="thruDate"
          className="double"
          value={state.thruDate}
          onChange={handleInput}
          placeholder="Through Date:"
        />
        <button onClick={handleSubmit} className="submitbutton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReleaseRequest;
