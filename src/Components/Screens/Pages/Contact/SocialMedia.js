import React from 'react';
import { Container } from 'react-bootstrap';
import './SocialMedia.css';

export const SocialMedia = () => {
  return (
    <div>
      <img
        src={require('./SocialMedia.png')}
        alt='Social Media links'
        height='70px'
        width='500px'
      />
    </div>
  );
};
