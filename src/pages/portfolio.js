import React from 'react';
import Accordion from '../components/accordion.js';

var content = (trigger, text) => ({trigger,text});

const testData = [
  content('The Crucible', 'Mary Warren'),
  content('The Crucible', 'Mary Warren'),
  content('The Crucible', 'Mary Warren'),
  content('The Crucible', 'Mary Warren'),
  content('The Crucible', 'Mary Warren'),
];


const CVPage = () => <Accordion contents={testData}/>;

export default CVPage;
