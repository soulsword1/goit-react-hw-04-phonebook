import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormSubmitBtn,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let contactAdded = null;
    contactAdded = this.props.onSubmit(this.state);
    contactAdded && this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <Form action="" onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel>
            Name:
            <FormInput
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </FormLabel>
        </FormGroup>
        <FormGroup>
          <FormLabel>
            Phone:
            <FormInput
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </FormLabel>
        </FormGroup>

        <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
