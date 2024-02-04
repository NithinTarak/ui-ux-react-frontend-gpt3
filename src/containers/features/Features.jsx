import React from 'react';
import './features.css';
import { Feature } from '../../componentes';

const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text: 'ChatGPT now uses the GPT-3.5 model that includes a fine-tuning process for its algorithm. ChatGPT Plus uses GPT-4, which offers a faster response time and internet plugins.'
  },
  {
    title: 'Become the tended active',
    text: ' GPT-4 can also handle more complex tasks compared with previous models, such as describing photos, generating captions for images and creating more detailed responses up to 25,000 words.'
  },
  {
    title: 'Message or am nothing',
    text: 'ChatGPT now uses the GPT-3.5 model that includes a fine-tuning process for its algorithm. ChatGPT Plus uses GPT-4, which offers a faster response time and internet plugins.'
  },
  {
    title: 'Really boy law county',
    text:"GPT-4 can also handle more complex tasks compared with previous models, such as describing photos, generating captions for images and creating more detailed responses up to 25,000 words."
  }
]

const features = () => {
  return (
    <div className="features section__padding" id='features'>
      <div className="features-heading">
        <h1 className="gradient__text">The Future is Now You Just Need To Realize It.Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className="features-container">
          {featuresData.map((item,index) => (
            <Feature title={item.title} text={item.text} key={item.title+index}/>
          ))}
      </div>
    </div>
  )
}

export default features