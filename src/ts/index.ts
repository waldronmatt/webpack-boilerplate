/* global document */
// eslint-disable-next-line import/no-unresolved
import '@/scss/index.scss';

const getCopyrightYear = () => {
  document
    .getElementById('copyright')
    ?.appendChild(document.createTextNode(new Date().getFullYear().toString()));
};

export default getCopyrightYear();
