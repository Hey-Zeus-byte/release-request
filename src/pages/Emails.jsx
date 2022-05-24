import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../EmailStyle.css";
import "../ReleaseRequestStyle.css";

const Emails = () => {
  const navigate = useNavigate();
  const contacts = [
    {
      id: 0,
      name: "J Valdez",
      email: "valdezj@gscfinc.com",
      company: "Golden State Construction & Framing, Inc.",
    },
    {
      id: 1,
      name: "Chris Both",
      email: "cboth@goldenstatelumber.com",
      company: "Golden State Lumber, Inc.",
    },
    {
      id: 2,
      name: "Irma Bara-Zapien",
      email: "ibara-zapien@southerncarlson.com",
      company: "Southern Carlson",
    },
    {
      id: 3,
      name: "Melissa",
      email: "melissa@calnail.com",
      company: "California Nail & Supply, Inc.",
    },
    {
      id: 4,
      name: "Andrea",
      email: "prelien@pjsrebar.com",
      company: "PJ’s Rebar",
    },
    {
      id: 5,
      name: "Karen Purdy",
      email: "Karen.Purdy@whitecap.com",
      company: "White Cap",
    },
    {
      id: 6,
      name: "Martha A Asfaw",
      email: "Martha.Asfaw@lehighHanson.com",
      company: "Lehigh Hanson",
    },
    {
      id: 7,
      name: "Melissa Miranda",
      email: "melissa.miranda@cemex.com",
      company: "CEMEX",
    },
    {
      id: 8,
      name: "Leigha Bennett",
      email: "leigha.bennett@norcallumber.com",
      company: "Norcal Lumber",
    },
    {
      id: 9,
      name: "Chrissy Lencioni",
      email: "alliedconcretepumping@yahoo.com",
      company: "Allied Concrete Pumping",
    },
    {
      id: 10,
      name: "Meagan Kubinski",
      email: "releases@wcsg.com",
      company: "West Coast Sand & Gravel, Inc.",
    },
    {
      id: 11,
      name: "Angie Lewis",
      email: "angie.lewis@paccoast.com",
      company: "Pacific Supply",
    },
    {
      id: 12,
      name: "Wendy Madsen",
      email: "Wendy.Madsen@lwsupply.com",
      company: "L&W Supply",
    },
  ];

  const [contactList, setContactList] = useState(contacts);

  const handleSubmit = (e) => {
    e.preventDefulat();
    setContactList({
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
        <button onSubmit={handleSubmit}>Add Contact</button>
      </form>
      {contactList.map((c) => {
        return (
          <div key={c.id} className="emailList">
            <h1>{c.name}</h1>
            <h1 className="crimson">{c.email}</h1>
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
