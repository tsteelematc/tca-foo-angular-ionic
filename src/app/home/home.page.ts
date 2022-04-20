import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private gameSvc: GameService) {}

  ngOnInit(): void {
  }

  ionViewDidEnter() {
  }
  
}
