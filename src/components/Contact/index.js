import React, {Component} from 'react';
import {ContactSection,Span,ContactTitle,Form,FormInput,SubmitForm,InputFW,TextArea,InputEmail,InputText} from './style.js';

class Contact extends Component {
  render() {
    return (
      <ContactSection>
      <div class="container">
          <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
          <Form action="">
              <FormInput>
                  <InputText type="text" placeholder="Your Name"/>
                  <InputEmail type="email" placeholder="Your Email"/>
              </FormInput>
              <InputFW type="text" placeholder="Your Subject"/>
              <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
              <SubmitForm type="submit" value="Send Message"/>
          </Form>
      </div>
    </ContactSection>
    )
  }
}

export default Contact;
