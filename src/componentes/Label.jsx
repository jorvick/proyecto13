
import React from 'react';
import "./Label.css";

function Label({text}) {
  return (
    <div className='input__div-l'>
      <label className='label__input'>{text}</label>
    </div>
  )
}

export default Label