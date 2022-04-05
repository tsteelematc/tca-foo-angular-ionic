import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Player {
  name: string;
  order: number;
}

interface GameResult {
  start: string;
  end: string;
  winner: string;
  players: Player[];
}

interface CurrentGame {
  start: string;
  availablePlayers: Player[];
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameResults: GameResult[] = [];

  addGameResult = async (r: GameResult) => {
    
    this.gameResults = [
      ...this.gameResults
      , r
    ];

    await this.storage.set("gameResults", this.gameResults);
  };  

  getUniquePlayers = () => (
    [... new Set(this.gameResults.flatMap(x => x.players.map(y => y.name)))]
  );

  currentGame: CurrentGame = {
    start: ""
    , availablePlayers: [] 
  };

  setCurrentGame = (g: CurrentGame) => {
    this.currentGame = g;
  };

  calculateShortestGame = () => (
    Math.min(
        ...this.gameResults.map(x => Date.parse(x.end) - Date.parse(x.start))
    )
  );
  
  calculateLeaderboard = () => {

    return this.getUniquePlayers()
        .map(x => {

            const userGamesPlayed = this.gameResults.filter(y => y.players.some(z => z.name === x));
            const userGamesWon = userGamesPlayed.filter(y => y.winner === x);

            return {
                name: x
                , wins: userGamesWon.length
                , losses: userGamesPlayed.length - userGamesWon.length
                , winningPercent: (userGamesWon.length / userGamesPlayed.length).toFixed(3)
            };
        })
        .sort((a, b) => `${b.winningPercent}${(b.wins + b.losses).toString().padStart(3, '0')}`.localeCompare(`${a.winningPercent}${(a.wins + a.losses).toString().padStart(3, '0')}`))
    ;
  };

  private storage: Storage = undefined; 

  private initStorageAndLoadGameResults = async () => {
    this.storage = await this.storageSvc.create();
    this.gameResults = await this.storage.get("gameResults") ?? [];
  };

  constructor(
    private storageSvc: Storage
  ) { 
    this.initStorageAndLoadGameResults();
  }
}
