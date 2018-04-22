import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})


export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Vivek\'s app',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };
  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false 
  };

  public src: string;
   ngOnInit() {
    if(!navigator.onLine){
      this.src = "/assets/img/cat_offline.jpg";
    }else{      
      this.src = this.image.api + this.image.message;
    }
    //this.src = this.image.api + this.image.message;    
    this.generateSrc();
    console.log(this.src);
   }
  public generateSrc(): void {
    if(!navigator.onLine){
      this.button.text = "You are offline";
      this.button.disabled = true;
      // this.src = "/assets/img/cat_offline.jpg";
      return;
    }
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }
};

class CatImage {
  message: string;
  api: string;
  fontsize: number;
};

class Button {
  text: string;
  disabled: boolean;
  color: string;
};