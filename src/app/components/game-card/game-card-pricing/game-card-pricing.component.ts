import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card-pricing',
  templateUrl: './game-card-pricing.component.html',
  styleUrls: ['./game-card-pricing.component.css']
})
export class GameCardPricingComponent implements OnInit {
	@Input()
	gameType : string = ""
	@Input()
	gamePrice : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
