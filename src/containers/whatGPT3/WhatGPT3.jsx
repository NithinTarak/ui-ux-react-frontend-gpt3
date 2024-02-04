import React from 'react';
import './whatGPT3.css';
import {Feature} from '../../componentes';

const whatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id='wgpt3'>
      <div className="whatgpt3-feature">
        <Feature title='What is GPT-3' text='With its staggering 175 billion parameters, GPT-3 possesses an unprecedented capacity to understand and generate human-like text. Its astonishing ability to analyze and comprehend input prompts makes it a versatile tool for various applications, such as drafting emails, writing code, or even answering questions.'/>
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination..</h1>
        <p>Explore the Library.</p>
      </div>
      <div className="whatgpt3-container">
        <Feature title='Chatbots' text='ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot.' />
        <Feature title='Knowledgebase' text='A Knowledge Base (KB) is information stored as structured data, ready to be used for analysis or inference. Usually, a KB is stored as a graph (i.e. a Knowledge Graph), where nodes are entities and edges are relations between entities.'/>
        <Feature title="Education" text="GPT-3 has the potential to improve teaching and learning in several ways. For example, at Noodle Factory, we leverage GPT-3 in our “Walter” platform to generate summarised knowledge bases of the content instructors use to teach a class.Additionally, we can generate personalised lesson plans."/>
      </div>
    </div>
  )
}

export default whatGPT3