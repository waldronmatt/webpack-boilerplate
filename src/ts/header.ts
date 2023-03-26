import '@/scss/index.scss';
// @PERFORMANCE-COMMENT
// tells webpack to map generated webp to jpg
import webpackLogo from '@/images/icon-square-small.jpg?as=webp';

const logo = document.createElement('img');
const header = document.querySelector('header');
header?.prepend(logo);
logo.src = webpackLogo;
logo.alt = 'Webpack Logo';
logo.height = 50;
logo.width = 50;
