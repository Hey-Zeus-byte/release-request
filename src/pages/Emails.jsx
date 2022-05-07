import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../EmailStyle.css";
import "../ReleaseRequestStyle.css";

const Emails = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([
    {
      id: 0,
      name: "",
      email: "",
      company: "",
    },
  ]);

  const handleSubmit = (e) => {
    setContacts({
      ...contacts,
      name: e.target.value,
      email: e.target.value,
      company: e.target.value,
    });
  };

  return (
    <div>
      <h2>Enter contact information:</h2>
      <form>
        <input placeholder="Enter contact name: "></input>
        <input placeholder="Enter contact email: "></input>
        <input placeholder="Enter contact company: "></input>
        <button onClick={handleSubmit}>Add Contact</button>
      </form>
      {contacts.map((c) => {
        return (
          <div key={c.id}>
            <h1>{c.name}</h1>
            <h1>{c.email}</h1>
            <h1>{c.company}</h1>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="submitbutton"
      >
        Go back to release request generator
      </button>
    </div>
  );
};

export default Emails;

/* <ul className="emailList">
        <li>Name: {contacts[0].name}</li>
        <li className="crimson">Email: {contacts[0].email}</li>
        <li>Company: {contacts[0].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[1].name}</li>
        <li className="crimson">Email: {contacts[1].email}</li>
        <li>Company: {contacts[1].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[2].name}</li>
        <li className="crimson">Email: {contacts[2].email}</li>
        <li>Company: {contacts[2].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[3].name}</li>
        <li className="crimson">Email: {contacts[3].email}</li>
        <li>Company: {contacts[3].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[4].name}</li>
        <li className="crimson">Email: {contacts[4].email}</li>
        <li>Company: {contacts[4].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[5].name}</li>
        <li className="crimson">Email: {contacts[5].email}</li>
        <li>Company: {contacts[5].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[6].name}</li>
        <li className="crimson">Email: {contacts[6].email}</li>
        <li>Company: {contacts[6].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[7].name}</li>
        <li className="crimson">Email: {contacts[7].email}</li>
        <li>Company: {contacts[7].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[8].name}</li>
        <li className="crimson">Email: {contacts[8].email}</li>
        <li>Company: {contacts[8].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[9].name}</li>
        <li className="crimson">Email: {contacts[9].email}</li>
        <li>Company: {contacts[9].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[10].name}</li>
        <li className="crimson">Email: {contacts[10].email}</li>
        <li>Company: {contacts[10].company}</li>
      </ul>
      <ul className="emailList2">
        <li>Name: {contacts[11].name}</li>
        <li className="crimson">Email: {contacts[11].email}</li>
        <li>Company: {contacts[11].company}</li>
      </ul>
      <ul className="emailList">
        <li>Name: {contacts[12].name}</li>
        <li className="crimson">Email: {contacts[12].email}</li>
        <li>Company: {contacts[12].company}</li>
      </ul> */
