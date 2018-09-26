import {Injectable, OnInit} from '@angular/core';
import {Trader} from './domain/Trader';

@Injectable()
export class TradersService {
  traders: Trader[];

  constructor() {
    this.traders = this.getMockTraders();
  }

  private getMockTraders(): Trader[] {
    const traders: Trader[] = [];
    traders.push(new Trader('Oleg'));
    traders.push(new Trader('Anna'));
    return traders;
  }

  add(name: string) {
    this.traders.push(new Trader(name));
  }

  getTraders(): Promise<Trader[]> {
    return new Promise(resolve =>
      setTimeout(() => resolve(Promise.resolve(this.traders)), 100));
  }

  getTrader(name: string): Promise<Trader> {
    return new Promise(resolve => {
      setTimeout(() =>
        resolve(Promise.resolve(this.traders.find(t => name === t.getName()))), 0);
    });
  }
}
