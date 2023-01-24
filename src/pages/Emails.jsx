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
  justify-content: space-between;
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

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-color: grey;
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
    {
      name: "jesus valdez",
      email: "jesusvaldez30000000000@gzuz.com",
      company: "gzuz company",
      number: "123-456-7890",
    },
    {
      name: "jesus valdez jr de la mariposa fuentes caldos",
      email: "jesusvaldez@gzuz.com",
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
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updateCompany, setUpdateCompany] = useState("");
  const [updateNumber, setUpdateNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const contactsCollectionRef = collection(db, "contacts");

  // useEffect(() => {
  //   if (contacts.length) {
  //     return;
  //   } // stop early
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
      name: updateName,
      email: updateEmail,
      company: updateCompany,
      number: updateNumber,
    }).then(() => setSelectedContact(null));
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

  const CreateModal = () => {
    return (
      <ModalContainer>
        <Modal>
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
          <Button text="Close" color="red" onClick={() => setIsOpen(!isOpen)}>
            Add Contact
          </Button>
        </Modal>
      </ModalContainer>
    );
  };

  const UpdateModal = ({ contact }) => {
    return (
      <ModalContainer>
        <Modal>
          <h4>Update contact information: </h4>
          <Input
            value={contact.name}
            onChange={(e) => setUpdateName(e.target.value)}
            placeholder="Enter contact name: "
          ></Input>
          <Input
            value={contact.email}
            onChange={(e) => setUpdateEmail(e.target.value)}
            placeholder="Enter contact email: "
          ></Input>
          <Input
            value={contact.company}
            onChange={(e) => setUpdateCompany(e.target.value)}
            placeholder="Enter contact company: "
          ></Input>
          <Input
            value={contact.number}
            onChange={(e) => setUpdateNumber(e.target.value)}
            placeholder="Enter contact number: "
          ></Input>
          <UpdateOrDeleteContact>
            <Button
              text="Update Contact"
              color="lightgreen"
              onClick={() => updateContact(contact.id)}
            ></Button>
            <Button
              text="Close"
              color="red"
              onClick={() => setSelectedContact(null)}
            ></Button>
          </UpdateOrDeleteContact>
        </Modal>
      </ModalContainer>
    );
  };

  const DeleteModal = () => {
    return (
      <ModalContainer>
        <Modal>
          <Button
            text="Delete Contact"
            color="red"
            onClick={() => deleteContact(contact.id)}
          ></Button>
        </Modal>
      </ModalContainer>
    );
  };

  const contactsToRender = searchShow ? contacts : filteredContacts;

  return (
    <ContentWrapper>
      <InputWrapper>
        <SearchNote
          placeholder="Search for company..."
          type="text"
          onChange={handleChange}
        />
        <Button
          text="Add Contact"
          color="lightgreen"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Contact
        </Button>
      </InputWrapper>
      {contactsToRender.map((contact) => {
        return (
          <Contact key={contact.id}>
            <NameColumn>
              <Text>{contact.company}</Text>
              <Text>{contact.name}</Text> <div>{contact.number}</div>
            </NameColumn>
            <Text
              className="contact-email"
              onClick={() => navigator.clipboard.writeText(contact.email)}
            >
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
                onClick={() => setDeleteIsOpen(!deleteIsOpen)}
              ></Button>
            </UpdateOrDeleteContact>
          </Contact>
        );
      })}
      <BlackLine />
      {selectedContact ? <UpdateModal contact={selectedContact} /> : null}
      {isOpen ? <CreateModal /> : null}
      {deleteIsOpen ? <DeleteModal id={contact.id} /> : null}
    </ContentWrapper>
  );
};

export default Emails;
