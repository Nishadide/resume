import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as AOS from 'aos';

import Swiper from 'swiper/bundle';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {
  element: any = {
    container_1: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_2: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_3: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_4: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_5: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_6: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
     container_7: {
      img: "../../assets/images/portfolio/portfolio-detail-1.jpg"
     },
  }
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    AOS.init();


    /**
   * Testimonials slider
   */
     const swiper = new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });



  }
  detailPopup(data){
console.log(data)
    this.dialog.open(DetailDialogComponent , { data, panelClass: 'dialog',});
  }

}
