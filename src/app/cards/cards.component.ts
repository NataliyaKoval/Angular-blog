import {Component, OnInit} from '@angular/core';
import {CardsService} from '../services/cards.service';
import {Photo} from '../interfaces/photo';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private cardsService: CardsService) {
  }

  ngOnInit(): void {
    this.cardsService.getPhotos()
      .subscribe(photos => {
        this.photos = photos;
      });
  }

}
