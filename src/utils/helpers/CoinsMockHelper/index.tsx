import coinsMock from "@/__mocks__/coins.json";
import { CoingeckoI } from "@/utils/interfaces/coingecko-api";

export class CoinsMockHelper {
  public setCoins(): void {
    localStorage.setItem("coins", JSON.stringify(coinsMock));
  }
  public getCoins(): CoingeckoI[] {
    return JSON.parse(localStorage.getItem("coins") || "{}");
  }
  public refreshCoins(): void {
    localStorage.clearItem("coins");
    localStorage.setItem("coins", JSON.stringify(coinsMock));
  }
}

export default CoinsMockHelper;
