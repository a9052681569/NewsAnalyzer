import Search from './components/Search';
import Preloader from './components/Preloader'
import NewsApi from './modules/NewsApi'
import SearchSuccess from './components/SearchSuccess'
import CardList from './components/CardList'
import NewsCard from './components/NewsCard'
import {searchTimeRange, cardsPerClick} from './constants/constants'

import '../css/style.css';

const cardList = new CardList(cardsPerClick, new NewsCard())

new Search(document.querySelector('.search__form'),
  document.querySelector('.search__form-input'),
  document.querySelector('.search__result'),
  document.querySelector('.search__form-button'),
  new SearchSuccess(cardList),
  new Preloader(),
  new NewsApi(searchTimeRange))
  .showLastRequest()