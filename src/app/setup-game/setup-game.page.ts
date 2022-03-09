import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService, Player } from '../game.service';

interface AvailablePlayerChoice extends Player {
  checked: boolean;  
}

@Component({
  selector: 'app-setup-game',
  templateUrl: './setup-game.page.html',
  styleUrls: ['./setup-game.page.scss'],
})
export class SetupGamePage implements OnInit {

  constructor(
    private gameSvc: GameService
    , private router: Router
  ) { }

  ngOnInit() {
    this.availablePlayers = this.gameSvc.getUniquePlayers().map(x => ({
      name: x
      , order: 0
      , checked: false
    }));
  }

  letsPlay = () => {

    // Setup the current game players and start timestamp.
    this.gameSvc.setCurrentGame({
      start: new Date().toISOString()
      , availablePlayers: [
        {
          name: this.availablePlayers[0].name
          , order: 1
        }
        , {
          name: this.availablePlayers[1].name
          , order: 2
        }
        , {
          name: "Suzzie"
          , order: 3
        }
      ]
    });

    // Navigate to the play screen.
    this.router.navigateByUrl("/play");
    
  };

  availablePlayers: AvailablePlayerChoice[] = [];
}
