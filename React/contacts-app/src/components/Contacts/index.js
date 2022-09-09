import {useState, useEffect} from 'react';

import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
    const[contacts, setContacts] = useState([
        {
            fullname: "Jason",
            phone_number:"12424",
        },{
            fullname: "Alice",
            phone_number:"43564",
        },{
            fullname: "Nancy",
            phone_number:"79765",
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts ={contacts} />
        </div>
    );
}

export default Contacts;