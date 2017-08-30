import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import './accordion.scss';


const Accordion =  props => 
  <div className='accordion'>
    {props.contents.map(content => <Fold content={content}/>)}
  </div>;

Accordion.propTypes = {
  contents: PropTypes.array,
};

const Fold = props => 
  <Collapsible trigger={props.content.trigger}>
    <p>{props.content.text}</p>
  </Collapsible>;


Fold.propTypes = {
  content: PropTypes.shape({
    trigger: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Accordion;
