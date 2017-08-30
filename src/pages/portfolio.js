import React from 'react';
import Accordion from '../components/accordion.js';

const is = [
  "http://unsplash.it/200",
  "http://unsplash.it/200",
  "http://unsplash.it/200",
];
var play = (title, text, imageURLs) => {
  const images=
    <div className='content-images' >
      {imageURLs.map((url,i) => <img key={i} src={url} />)}
    </div>;

  const inner =
    <div className='content' >
      <p>{text} </p>
      {images} 
    </div>;
  
  return {title, inner};
};

const testData = [
  play('The Crucible', 'Mary Warren',is ),
  play('The Crucible', 'Mary Warren',is ),
  play('The Crucible', 'Mary Warren',is ),
  play('The Crucible', 'Mary Warren',is ),
  play('The Crucible', 'Mary Warren',is ),
];


const CVPage = () => <Accordion contents={testData}/>;

export default CVPage;
