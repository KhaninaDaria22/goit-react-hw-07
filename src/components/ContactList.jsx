import css from "../css/ContactList.module.css";
import Contact from "./Contact"
import {  useSelector } from "react-redux";
// import { selectFilter } from "../redux/filtersSlice";
import {selectFilteredContacts} from "../redux/contactsSlice.js"
// import { deleteContact } from "../redux/contactsOps.js";
 

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ulContacts}>
      {filteredContacts.map(({ name, id, number }) => (
          <Contact  key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
