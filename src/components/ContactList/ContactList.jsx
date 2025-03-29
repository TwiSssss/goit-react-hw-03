import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={style.contactList}>
            {contacts.map(({ id, number, name }) => (
                <Contact key={id} number={number} name={name} onDelete={() => onDelete(id)} />
            ))}
        </ul>
    );
};
export default ContactList;
