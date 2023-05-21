import React from 'react';
import './body.css';

const current = new Date();
const time = current.getHours();
let greeting = '';
let cssStyle = {};

if (time >= 1 && time <= 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
} else if (time > 12 && time < 19) {
  greeting = 'Good AfterNoon';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

const AppBody = () => {
  return (
    <div>
      <h1>Hello sir , <span style={cssStyle}>{greeting}</span>  </h1>
    </div>
  );
}

export default AppBody;