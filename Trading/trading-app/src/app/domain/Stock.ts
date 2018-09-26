import {MarketService} from '../market/market.service';

export class Stock {
  private price: number;

  constructor(private symbol: string, private company: string,
              private marketService: MarketService) {
    this.price = this.marketService.getPrice(symbol);
    this.initPriceFetcher();
  }

  private initPriceFetcher() {
    setInterval(() => {
      this.price = this.marketService.getUpdatedPrice(this.price);
      if (this.price <= 0) {
        this.price = this.marketService.getPrice(this.symbol);
      }
    }, 1000);
  }

  getSymbol(): string {
    return this.symbol;
  }

  getCompany(): string {
    return this.company;
  }

  getPrice(): number {
    return this.price;
  }
}
