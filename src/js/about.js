import Swiper from './components/Swiper';
import GithubApi from './modules/GithubApi';
import SwiperSlide from './components/SwiperSlide';
import Preloader from './components/Preloader'

import '../css/about.css';

new Swiper(document.querySelector('.about'), new GithubApi(), new SwiperSlide(), new Preloader()).init()