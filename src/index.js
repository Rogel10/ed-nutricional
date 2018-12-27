import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './js/config'
import styles from './scss/main.scss';

import tplHome from './html/home.tpl.html';
import tplCursos from './html/cursos.tpl.html';
import tplContact from './html/contact.tpl.html';
import tplAdmin from './html/admin.tpl.html';
import tplAdminAuth from './html/admin_auth.tpl.html';
import toggleNav from './js/toggle_nav';

const d = document,
  main = d.querySelector('.Main'),
  footerYear = d.querySelector('.Footer-year')

footerYear.textContent = new Date().getFullYear();
toggleNav();

d.addEventListener('DOMContentLoaded', (e) => {
  main.innerHTML = tplHome;
});

// NAVEGACION
d.addEventListener('click', (e)=> {

  if(e.target.matches('a[href="#"]')){
    e.preventDefault();
  }

  if(e.target.matches('#home')){
    main.innerHTML = tplHome;
  } else if (e.target.matches('#courses')){
    main.innerHTML = tplCursos;
  } else if (e.target.matches('#contact')){
    main.innerHTML = tplContact
  } else if (e.target.matches('#admin')){
    firebase.auth().onAuthStateChanged((user) => {
      main.innerHTML = (user) ? tplAdminAuth : tplAdmin;
    })
  }

});
