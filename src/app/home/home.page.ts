import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private gameSvc: GameService) {}


  get shortestGame() {
    return this.gameSvc.calculateShortestGame() / 1000 /  60;
  }

  get leaderboardData() {
    return this.gameSvc.calculateLeaderboard();
  };

  ngOnInit(): void {
  }

  ionViewDidEnter() {
  }
  
}
