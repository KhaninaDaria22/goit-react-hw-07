import css from "../css/ContactList.module.css";
import Contact from "./Contact"
import {  useSelector,useDispatch  } from "react-redux";
// import { selectFilter } from "../redux/filtersSlice";
import {selectFilteredContacts} from "../redux/contactsSlice.js"
import { deleteContact } from "../redux/contactsOps.js";
 

export default function ContactList() {
  const filteredContacts  = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  
  return (
    <ul className={css.ulContacts}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={() => handleDeleteContact(contact.id)}/>
        </li>
      ))}
    </ul>
  );
}

