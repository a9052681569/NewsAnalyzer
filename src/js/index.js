import Search from './components/Search';
import {searchTimeRange, cardsPerClick} from './constants/constants'

import '../css/style.css';

new Search(document.querySelector('.search__bar'),
  document.querySelector('.search__bar-input'),
  document.querySelector('.search__result'),
  document.querySelector('.search__bar-button'),
  searchTimeRange)
  .showLastRequest(cardsPerClick)