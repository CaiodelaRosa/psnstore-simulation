import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

	@Input()
	gameCover : string = ""
	@Input()
	gameLabel: string = ""
	@Input()
	gameType : string = ""
	@Input()
	gamePrice : string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
