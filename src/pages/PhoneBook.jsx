import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/Contacts/operations';
import { selectIsLoading } from 'redux/Contacts/contactsSelectors';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section>
      <PhoneBook />
      </Section>
      
      <Section>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList />
      </Section>
    </>
  );
}
