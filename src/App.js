import React from 'react';
import './App.scss';
import Content from './components/content/Content';
import FormGroup from './components/formGroup/FormGroup';
import Header from './components/header/Header';
import leftEllipse from "./img/Ellipse156.png"
import rightEllipse from "./img/Ellipse157.png"
import html from "./img/1024px-HTML5_logo_and_wordmark.png"
import css from "./img/1452px-CSS3_logo_and_wordmark.png"
import javascript from "./img/javascript.png"
import sublime from "./img/1505369583_sublime-text1.png"
import vscode from "./img/Visual_Studio_Code_1.35_icon.png"

function App() {
  return (
    <div className="App">
      <img src={leftEllipse} className="leftEllipse"/>
      <img src={rightEllipse} className="rightEllipse"/>
      <img src={html} className="html"/>
      <div className='html-point'/>
      <img src={css} className="css"/>
      <div className='css-point'/>
      <img src={javascript} className="javascript"/>
      <div className='js-point'/>
      <img src={sublime} className="sublime"/>
      <div className='sublime-point'/>
      <img src={vscode} className="vscode"/>
      <div className='vs-point'/>
      <Header/>
      <Content/>
      <FormGroup/>
      <div className='footer'>
        front-end developer
      </div>
    </div>
  );
}

export default App;
