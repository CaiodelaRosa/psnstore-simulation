import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameCardLabelComponent } from './components/game-card/game-card-label/game-card-label.component';
import { GameCardPricingComponent } from './components/game-card/game-card-pricing/game-card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    GameCardComponent,
    GameCardLabelComponent,
    GameCardPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
