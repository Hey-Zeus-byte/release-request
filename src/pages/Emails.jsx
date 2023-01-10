import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import styled from "styled-components";
import { Button } from "./Button";
import { ContentWrapper } from "./ContentWrapper";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 500px) {
    align-items: flex-start;
  }
`;

const Input = styled.input`
  display: flex;
  width: 400px;
  height: 40px;

  @media only screen and (max-width: 500px) {
    width: 250px;
  }
`;

const ContactWrapper = styled.div`
  border: 2px solid black;
  line-height: 10px;
  background-color: white;

  @media only screen and (max-width: 500px) {
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 10px;

  .contact-email {
    cursor: pointer;
    text-transform: lowercase;

    &:hover {
      color: red;
    }
  }

  @media only screen and (max-width: 500px) {
    .contact-text {
      font-size: 11px;
    }

    .contact-email {
      font-size: 11px;
      cursor: pointer;
      text-transform: lowercase;

      &:hover {
        color: red;
      }
    }
  }
`;

const Text = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;

  @media only screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

const BlackLine = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  background-color: black;
  margin-top: 10px;
`;

const Modal = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: white;
`;

const UpdateOrDeleteContact = styled.div``;

const NameColumn = styled.div``;

const SearchNote = styled.input``;

const Emails = () => {
  const [contacts, setContacts] = useState([
    {
      name: "jesus",
      email: "jesus@gzuz.com",
      company: "gzuz company",
      number: "123-456-7890",
    },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [filteredContacts, setFilteredContacts] = useState("");
  const [searchShow, setSearchShow] = useState(true);
  const [selectedContact, setSelectedContact] = useState();

  const contactsCollectionRef = collection(db, "contacts");

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const data = await getDocs(contactsCollectionRef);
  //     const items = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setContacts(items);
  //   };

  //   getContacts();
  // }, []);

  const createContact = async () => {
    await addDoc(contactsCollectionRef, {
      name: name,
      email: email,
      company: company,
      number: number,
    }).catch((err) => {
      alert(err);
      console.error(err);
    });
  };

  const deleteContact = async (id) => {
    const bidDoc = doc(db, "contacts", id);
    await deleteDoc(bidDoc);
  };

  const updateContact = async (id) => {
    const contactDoc = doc(db, "contacts", id);
    await updateDoc(contactDoc, {
      name: name,
      email: email,
      company: company,
      number: number,
    });
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

  const UpdateModal = ({ contact, updateContact }) => {
    return (
      <Modal>
        <h4>This is the modal</h4>
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
        <Input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter contact number: "
        ></Input>
        <Button
          text="Add Contact"
          color="lightgreen"
          onClick={() => updateContact(contact.id)}
        >
          Add Contact
        </Button>
      </Modal>
    );
  };

  const contactsToRender = searchShow ? contacts : filteredContacts;

  return (
    <ContentWrapper>
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
        <Input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter contact number: "
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
          <Contact key={contact.id}>
            <NameColumn>
              <Text>{contact.company}</Text>
              <Text>{contact.name}</Text> <div>{contact.number}</div>
            </NameColumn>
            <Text onClick={() => navigator.clipboard.writeText(contact.email)}>
              {contact.email}
            </Text>
            <UpdateOrDeleteContact>
              <Button
                color="lightblue"
                text="Update"
                onClick={() => setSelectedContact(contact)}
              ></Button>
              <Button
                text="Delete"
                color="red"
                onClick={() => deleteContact(contact.id)}
              ></Button>
            </UpdateOrDeleteContact>
          </Contact>
        );
      })}
      <BlackLine />
      {/* <UpdateModal id={selectedContact} updateContact={updateContact} /> */}
    </ContentWrapper>
  );
};

export default Emails;
