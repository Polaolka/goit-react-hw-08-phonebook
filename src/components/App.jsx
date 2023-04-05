import { Route, Routes } from 'react-router-dom';
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PhoneBook from 'pages/PhoneBook';

export default function App() {
  return (
    <>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/phonebook" element={<PhoneBook />} />
        </Route>
      </Routes>
      {/* <Section title="Phonebook"> */}
        {/* <PhoneBook /> */}
      {/* </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
      <ToastContainer autoClose={2500} /> */}
    </>
  );
}
