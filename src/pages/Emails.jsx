import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import styled from "styled-components";
import { Button } from "./Button";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  width: 400px;
  height: 40px;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 2px solid black;
  line-height: 10px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 10px;
`;

const Text = styled.p`
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 600;
  margin-left: 50px;
`;
const SearchNote = styled.input``;

const Emails = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [filteredContacts, setFilteredContacts] = useState("");
  const [searchShow, setSearchShow] = useState(true);

  const contactsCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsCollectionRef);
      const items = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setContacts(items);
    };

    getContacts();
  }, []);

  const createContact = async () => {
    await addDoc(contactsCollectionRef, {
      name: name,
      email: email,
      company: company,
    }).catch((err) => {
      alert(err);
      console.error(err);
    });
  };

  const deleteContact = async (id) => {
    const bidDoc = doc(db, "contacts", id);
    await deleteDoc(bidDoc);
  };

  const handleChange = (e) => {
    const searchWord = e.target.value;
    const newFilter = contacts.filter((contact) => {
      return contact.company.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredContacts(newFilter);
    if (newFilter === "") {
      setSearchShow(true);
    } else {
      setSearchShow(false);
    }
  };

  const contactsToRender = searchShow ? contacts : filteredContacts;

  return (
    <div>
      <h2>Enter contact information:</h2>
      <InputWrapper>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter contact name: "
        ></Input>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter contact email: "
        ></Input>
        <Input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter contact company: "
        ></Input>
        <Button
          text="Add Contact"
          color="lightgreen"
          onClick={() => createContact()}
        >
          Add Contact
        </Button>
        <SearchNote
          placeholder="Search for company..."
          type="text"
          onChange={handleChange}
        />
      </InputWrapper>
      {contactsToRender.map((contact) => {
        return (
          <ContactWrapper key={contact.id}>
            <Contact>
              <Text>Contact Name: {contact.name}</Text>
              <Text>Email: {contact.email}</Text>
              <Text>Company: {contact.company}</Text>
            </Contact>
            <div>
              <Button
                text="Delete"
                color="red"
                marginRight="20px"
                onClick={() => deleteContact(contact.id)}
              ></Button>
              <Button
                text="Copy Email"
                color="lightgreen"
                marginRight="20px"
                onClick={() => navigator.clipboard.writeText(contact.email)}
              ></Button>
            </div>
          </ContactWrapper>
        );
      })}
    </div>
  );
};

export default Emails;
