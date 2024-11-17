import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")

// const card1 = document.getElementById("card1")
// const card2 = document.getElementById("card2")
// const card3 = document.getElementById("card3")

// if(btn1) {
//   btn1.addEventListener("click", () =>{
//     card1.classList.add("collapsing", "show")
//   })
// }


// if(btn2) {
//   btn2.addEventListener("click", () =>{
//     card2.classList.add("collapsing", "show")
//   })
// }


// if(btn3) {
//   btn3.addEventListener("click", () =>{
//     card3.classList.add("collapsing", "show")
//   })
// }