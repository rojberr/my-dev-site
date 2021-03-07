import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>To contact me...</h1>
      <p>
        Feel free to email me via {' '}
        <a href="mailto: jakob.drzymala@gmail.com" rel="noopener noreferrer" target="_blank">
          jakob.drzymala@gmail.com </a>
      </p>
      <p>
        Contact me using {' '}
        <a href="https://www.xing.com/profile/Jakub_Drzymala/cv" rel="noopener noreferrer" target="_blank">
          @Xing </a>
        | {' '}
        <a href="https://www.linkedin.com/in/jay-dee-24b4b8208/" rel="noopener noreferrer" target="_blank">
          @LinkedIn </a>
        or fill in the contact form down below ...
      </p>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Jakub and I’m a Backend engineer!" />
    </Thumbnail>
  </Wrapper>
);
