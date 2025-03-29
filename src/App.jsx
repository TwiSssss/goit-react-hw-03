import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import userData from "./data/userData.json";

export const App = () => {
    const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("userData")) ?? userData);

    const [filter, setFilter] = useState("");
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(contacts));
    }, [contacts]);
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleDelete = (id) => {
        const newData = contacts.filter((item) => item.id !== id);
        setContacts(newData);
    };

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    
 localStorage.removeItem('userData');


    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm contacts={contacts} setContacts={setContacts} />
            <SearchBox value={filter} onChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        </div>
    );
    
};
