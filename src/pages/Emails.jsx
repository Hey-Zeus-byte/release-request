import React from "react";
import { useNavigate } from "react-router-dom";
import "../EmailStyle.css";
import "../ReleaseRequestStyle.css";

const Emails = () => {
  let navigate = useNavigate();
  const contacts = [
    {
      name: "J Valdez",
      email: "valdezj@gscfinc.com",
      company: "Golden State Construction & Framing, Inc."
    },
    {
      name: "Chris Both",
      email: "cboth@goldenstatelumber.com",
      company: "Golden State Lumber, Inc."
    },
    {
      name: "Irma Bara-Zapien",
      email: "ibara-zapien@southerncarlson.com",
      company: "Southern Carlson"
    },
    {
      name: "Melissa",
      email: "melissa@calnail.com",
      company: "California Nail & Supply, Inc."
    },
    {
      name: "Andrea",
      email: "prelien@pjsrebar.com",
      company: "PJ’s Rebar"
    },
    {
      name: "Karen Purdy",
      email: "Karen.Purdy@whitecap.com",
      company: "White Cap"
    },
    {
      name: "Martha A Asfaw",
      email: "Martha.Asfaw@lehighHanson.com",
      company: "Lehigh Hanson"
    },
    {
      name: "Melissa Miranda",
      email: "melissa.miranda@cemex.com",
      company: "CEMEX"
    },
    {
      name: "Leigha Bennett",
      email: "leigha.bennett@norcallumber.com",
      company: "Norcal Lumber"
    },
    {
      name: "Chrissy Lencioni",
      email: "alliedconcretepumping@yahoo.com",
      company: "Allied Concrete Pumping"
    },
    {
      name: "Meagan Kubinski",
      email: "releases@wcsg.com",
      company: "West Coast Sand & Gravel, Inc."
    },
    {
      name: "Angie Lewis",
      email: "angie.lewis@paccoast.com",
      company: "Pacific Supply"
    },
    {
      name: "Wendy Madsen",
      email: "Wendy.Madsen@lwsupply.com",
      company: "L&W Supply"
    }
  ];

  return (
    <div>
      <ul className='emailList'>
        <li>Name: {contacts[0].name}</li>
        <li className="crimson">Email: {contacts[0].email}</li>
        <li>Company: {contacts[0].company}</li>
      </ul>
      <ul className='emailList'>
        <li>Name: {contacts[1].name}</li>
        <li className="crimson">Email: {contacts[1].email}</li>
        <li>Company: {contacts[1].company}</li>
      </ul>
      <ul className='emailList'>
        <li>Name: {contacts[2].name}</li>
        <li className="crimson">Email: {contacts[2].email}</li>
        <li>Company: {contacts[2].company}</li>
      </ul>
      <ul className='emailList'>
        <li>Name: {contacts[3].name}</li>
        <li className="crimson">Email: {contacts[3].email}</li>
        <li>Company: {contacts[3].company}</li>
      </ul>
      <ul className='emailList'>
        <li>Name: {contacts[4].name}</li>
        <li className="crimson">Email: {contacts[4].email}</li>
        <li>Company: {contacts[4].company}</li>
      </ul>
      <ul className='emailList'>
        <li>Name: {contacts[5].name}</li>
        <li className="crimson">Email: {contacts[5].email}</li>
        <li>Company: {contacts[5].company}</li>
      </ul>
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
