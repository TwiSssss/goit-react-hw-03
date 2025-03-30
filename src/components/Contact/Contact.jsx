import { FaUser, FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";
const Contact = ({ number, name, onDelete }) => {
    return (
        <li className={style.contactItem}>
            <div className={style.contactInfo}>
                <p className={style.contactName}>
                    <FaUser /> {name}
                </p>
                <p className={style.contactNumber}>
                    <FaPhone /> {number}
                </p>
            </div>
            <button className={style.deleteButton} onClick={onDelete}>
                Delete
            </button>
        </li>
    );
};
export default Contact;
