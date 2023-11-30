import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card-label',
  templateUrl: './game-card-label.component.html',
  styleUrls: ['./game-card-label.component.css']
})
export class GameCardLabelComponent implements OnInit {

	@Input()
	gameLabel: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
