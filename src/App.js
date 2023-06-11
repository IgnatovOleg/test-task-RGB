import React from 'react';
import './App.scss';
import Content from './components/content/Content';
import Form from './components/formGroup/Form';
import Header from './components/header/Header';
import leftEllipse from "./img/leftEllipse.png"
import rightEllipse from "./img/rightEllipse.png"
import html from "./img/htmlIcon.png"
import css from "./img/cssIcon.png"
import javascript from "./img/javascript.png"
import sublime from "./img/sublime.png"
import vscode from "./img/vscode.png"
import InfoBox from './components/infoBox/InfoBox';
import ellipseButtom from "./img/ellipseBottom.png"

function App() {
  return (
    <div className="App">
      <div className='logo-box'>
        <img src={leftEllipse} className="leftEllipse" />
        <img src={rightEllipse} className="rightEllipse" />
        <img src={html} className="htmlIcon" />
        <div className='html-point' />
          <img src={css}  className="cssIcon"/>
        <div className='css-point' />
        <img src={javascript} className="javascriptIcon" />
        <div className='js-point' />
        <img src={sublime} className="sublime" />
        <div className='sublime-point' />
        <img src={vscode} className="vscode" />
        <div className='vs-point' />
      </div>
      <Header />
      <Content />
      <Form />
      <InfoBox />
      <img src={ellipseButtom} className="ellipse-bottom" />
      <div className='footer'>
        front-end developer
      </div>
    </div>
  );
}

export default App;
