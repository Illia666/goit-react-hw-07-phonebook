import { useState } from 'react';
import { useDispatch } from 'react-redux';
import initialState from './initialState';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import { Label, Input, Form } from './ContactForm.styled';

const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };
    dispatch(fetchAddContact(contact));
    setState({ ...initialState });
  };

  const { name, phone } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Number"
          required
        />
      </Label>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

export default ContactForm;