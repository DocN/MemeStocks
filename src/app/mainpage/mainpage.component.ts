import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  public carouselBanner: NgxCarousel;
 
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
 
  width = '220px';
  height = '200px';
  type = 'mscombi2d';
  dataSource;

  constructor() {
      this.dataSource = {
        "chart": {
            "caption": "Meme Stocks",
            "xaxisname": "Month",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "Ք",
            "theme": "fint"
        },
        "categories": [
            {
                "category": [
                    {
                        "label": "Jan"
                    },
                    {
                        "label": "Feb"
                    },
                    {
                        "label": "Mar"
                    },
                    {
                        "label": "Apr"
                    },
                    {
                        "label": "May"
                    },
                    {
                        "label": "Jun"
                    },
                    {
                        "label": "Jul"
                    },
                    {
                        "label": "Aug"
                    },
                    {
                        "label": "Sep"
                    },
                    {
                        "label": "Oct"
                    },
                    {
                        "label": "Nov"
                    },
                    {
                        "label": "Dec"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "Projected Revenue",
                "renderas": "line",
                "showvalues": "0",
                "data": [
                    {
                        "value": "15000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "23000"
                    }
                ]
            }
        ]
    }
  }

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10];
 
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }
 
  public carouselTileLoad(evt: any) {
 
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }
}
