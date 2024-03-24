import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import css from "../css/App.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

export default function App () {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <section className={css.section}>
          <h1>Phonebook</h1>
          <ContactForm/>
          </section>
        <section className={css.section}>
          <h1>Contact</h1>
          {error && <p>Opps...Try again later</p>}
          {loading && <p>Loading...</p>}
          <SearchBox />
          <ContactList />
        </section>
    </div>
  );
}

