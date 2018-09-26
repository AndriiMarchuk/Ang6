import {Trade} from './Trade';

export class Trader {
  private portfolio: Trade[];

  constructor(private name: string) {
    this.portfolio = [];
  }

  getName(): string {
    return this.name;
  }

  addToPortfolio(trade: Trade) {
    this.portfolio.push(trade);
  }

  getPortfolio(): Trade[] {
    return this.portfolio;
  }

  getOpenTrades(): Trade[] {
    return this.portfolio.filter(trade => trade.isOpen);
  }

  getClosedTrades(): Trade[] {
    return this.portfolio.filter(trade => !trade.isOpen);
  }

  private getRoundedPnL(pnl): number {
    return Math.round(pnl * 100 + Number.EPSILON) / 100;
  }

  getReleasedPnL(): number {
    let pnl = 0;
    for (const trade of this.portfolio) {
      pnl += trade.getReleasedPnL();
    }
    return this.getRoundedPnL(pnl);
  }

  getUnreleasedPnL(): number {
    let pnl = 0;
    for (const trade of this.portfolio) {
      if (trade.isOpen) {
        pnl += trade.getUnreleasedPnL();
      }
    }
    return this.getRoundedPnL(pnl);
  }

  getTotalPnL(): number {
    return this.getRoundedPnL(this.getReleasedPnL() + this.getUnreleasedPnL());
  }
}

