import React, {useState} from "react";
import copy from "copy-to-clipboard";
import "../ReleaseRequestStyle.css";

const ReleaseRequest = () => {
  const [state, setState] = useState({
    name: "",
    jobName: "",
    thruDate: "",
  });

  const [copyText, setCopyText] = useState("");
  const [release, setRelease] = useState("Conditional Progress Release");

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
    console.log(`You have copied "${copyText}"`);
  };

  const finalRelease = () => {
    if (release === "Conditional Final" || release === "Unconditional Final") {
      return <div>{""}</div>;
    } else {
      return <div>{`through ${state.thruDate}`}</div>;
    }
  };

  return (
    <div className="ReleaseRequest">
      <h1 className="header">Release Request Generator</h1>
      <h2 className="header2">
        Please click the email link first to find the appropriate contact.
      </h2>
      <h2 className="header2">
        Please enter the information needed to generate a release request
        statement:
      </h2>
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
          <option value="Conditional Progress Release">
            Conditional Progress
          </option>
          <option value="Unconditional Progress Release">
            Unconditional Progress
          </option>
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
      </form>
      <h2
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
          fontSize: "25px",
        }}
      >
        Copy and paste the following text:
      </h2>
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: "10px",
          fontSize: "25px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "25px",
        }}
        value={copyText}
        onChange={handleCopyText}
      >
        {`Hello, ${state.name}`} <b />
        {`Can you please send me a ${release} `}
        <span>{finalRelease()}</span>
        {`for ${state.jobName}?`} <b />
        Thank You!
      </div>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
};

export default ReleaseRequest;
