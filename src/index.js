import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import gsap from 'gsap';
import jQuery from 'jquery';
import { BrowserRouter } from 'react-router-dom';


const progressbarThumb = document.querySelector('.progressbar__thumb');
const progressbarPercent = document.querySelector('.progressbar__percent > tspan');

function onUpdateGsap() {
    const percent = gsap.getProperty(progressbarThumb, '--percent');
    progressbarPercent.textContent = Math.round(percent)+'%';
  }

const tl = gsap.timeline({defaults: {duration: 4, ease: 'linear'}})
.to(progressbarThumb, {'--percent': 100, onUpdate: onUpdateGsap});

jQuery(document).ready(function($) {
  setTimeout(function(){
      var preloader = document.getElementById('page_preloader')
      preloader.style.visibility='hidden'
  }, 1000);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>

);



