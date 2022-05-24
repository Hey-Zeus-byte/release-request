import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../ReleaseRequestStyle.css";
// import contactList from "./Emails";

const ReleaseRequest = () => {
  const [state, setState] = useState({
    name: "",
    jobName: "",
    thruDate: "",
  });

  const [release, setRelease] = useState();

  const navigate = useNavigate();

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ReleaseRequest">
      <h1 className="header">Release Request Generator</h1>

      <h2 className="header2">
        Please enter the information needed to generate a release request
        statement:
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
          name="name"
          className="inputs"
          value={state.name}
          onChange={handleInput}
          placeholder="Name:"
        />
        <input
          type="text"
          name="jobName"
          className="inputs"
          value={state.jobName}
          onChange={handleInput}
          placeholder="Job:"
        />
        <select
          className="inputs"
          onChange={(e) => {
            setRelease(e.target.value);
          }}
        >
          <option value="Conditional Progress">Conditional Progress</option>
          <option value="Unconditional Progress">Unconditional Progress</option>
          <option value="Conditional Final">Conditional Final</option>
          <option value="Unconditional Final">Unconditional Final</option>
        </select>
        <input
          type="text"
          name="thruDate"
          className="inputs"
          value={state.thruDate}
          onChange={handleInput}
          placeholder="Through Date:"
        />
        <h2>Copy and past the following text:</h2>
        <h1>{`Hello, ${state.name}`}</h1>
        <h1>
          {`Can you please send me a ${release} through 
          ${state.thruDate} for ${state.jobName} ?`}
        </h1>
        <h1>Thank You!</h1>
      </form>
    </div>
  );
};

export default ReleaseRequest;
