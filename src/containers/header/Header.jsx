import React from 'react';
import './header.css';
import people from '../../assets/assets/people.png'
import ai from '../../assets/assets/ai.png'

const Header = () => {
  return (
    <div className="header section__padding" id='home'>
      <div className="header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.</p>

        <div className="header-content__input">
          <input type="email" placeholder='Your email address..' />
          <button type='button'>Get started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt='people' />
          <p>1600 people requested access a visit in last 24 hours.</p>
        </div>
      </div>
      <div className="header-image">
          <img src={ai} alt="ai" />
        </div> 
    </div>
  )
}

export default Header