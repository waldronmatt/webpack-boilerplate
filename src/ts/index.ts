/* global document */
// eslint-disable-next-line import/no-unresolved
import '@/scss/index.scss';

// Test webp generation from jpg source image
import webpackLogo from '@/images/icon-square-small.jpg?as=webp';

document
  .getElementById('copyright')
  ?.appendChild(document.createTextNode(new Date().getFullYear().toString()));

const logo = document.createElement('img');
logo.src = webpackLogo;
logo.alt = 'Webpack Logo';
logo.height = 200;
logo.width = 200;

const app = document.querySelector('#root');
app?.append(logo);
