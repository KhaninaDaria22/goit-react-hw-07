import css from "../css/ContactList.module.css";
import { useDispatch } from "react-redux";
import {deleteContact} from "../redux/contactsOps.js"

export default function Contact({name, id, number}) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div>
      <div>
        <p>{name}: </p> 
        <p>{number}</p>
      </div>
      <button
        className={css.buttonContacts}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
