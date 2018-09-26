import {Component, OnInit} from '@angular/core';
import {Stock} from '../domain/Stock';
import {MarketService, MarketServiceImpl} from './market.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  stocks: Stock[];

  constructor(private marketService: MarketServiceImpl) {
    this.stocks = [];
  }

  ngOnInit() {
    this.updateStocks();
  }

  private updateStocks() {
    this.stocks = this.marketService.getStocks();
  }

  add(symbol: string, company: string) {
    this.marketService.addStock(symbol, company);
    this.updateStocks();
  }
}
