import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions, Pagination } from 'swiper';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: true,
   
    scrollbar: { draggable: true },
  };
}
