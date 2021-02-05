import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class PageOneBackground extends React.Component {
  render() {
    return (
      <div className = "page-one-background">
          <PageOneButton/>
      </div>
    );
  }
}

class PageOneButton extends React.Component {
  render () {
    return (<button className = "page-one-button">Click me!</button>);
  }
};


ReactDOM.render(
  <PageOneBackground />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
