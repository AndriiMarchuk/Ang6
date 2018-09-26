import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketComponent} from '../market/market.component';
import {TradersComponent} from '../traders/traders.component';
import {RouterModule, Routes} from '@angular/router';
import {TraderDetailsComponent} from '../trader-details/trader-details.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/market', pathMatch: 'full' },
    { path: 'traders', component: TradersComponent },
    { path: 'market', component: MarketComponent },
    { path: 'traders/details/:name', component: TraderDetailsComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
