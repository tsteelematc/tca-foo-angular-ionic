import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.page.html',
  styleUrls: ['./play-game.page.scss'],
})
export class PlayGamePage implements OnInit {

  constructor(
    private gameSvc: GameService
    , private routerSvc: Router
  ) { }

  ngOnInit() {
  }

  endGame = (winningPlayer: string) => {

    // Add a new game result.
    this.gameSvc.addGameResult(
      {
        start: this.gameSvc.currentGame.start
        , end: new Date().toISOString()
        , winner: winningPlayer
        , players: this.gameSvc.currentGame.availablePlayers
      }
    );

    // Navigate to the home page.
    this.routerSvc.navigateByUrl("/")

  };

  quitGame = () => {
    this.routerSvc.navigateByUrl("/")
  };

}
