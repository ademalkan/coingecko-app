import { CoingeckoI } from "@/utils";

export class CoinsMockHelper {
  public setCoins(coins: CoingeckoI[]): void {
    localStorage.setItem("coins", JSON.stringify(coins));
  }
  public getCoins(): CoingeckoI[] {
    return JSON.parse(localStorage.getItem("coins") || "[]");
  }
  public refreshCoins(coins: CoingeckoI[]): void {
    localStorage.clear();
    localStorage.setItem("coins", JSON.stringify(coins));
  }
}

export default CoinsMockHelper;
