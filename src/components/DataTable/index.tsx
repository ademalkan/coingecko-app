import Image from "next/image";
import React from "react";
import TinyLineChart from "../TinyLineChart";
import { CoingeckoI, priceDecimalFormatter } from "@/utils";

interface DataTablePropsI {
  coins: CoingeckoI[];
}

const DataTable = (props: DataTablePropsI): React.ReactNode => {
  const { coins } = props;
  return (
    <div className="inline-block min-w-full" style={{ maxWidth: "100dvw" }}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center text-sm font-light">
          <thead>
            <tr className="bg-slate-100 border border-slate-50 ">
              <th className="py-2 ">Image</th>
              <th className="py-2 ">Coin Name</th>
              <th className="py-2 ">Curren Price</th>
              <th className="py-2 ">Total Volume</th>
              <th className="py-2 ">Market Cap Change Percentage (24h)</th>
              <th className="py-2 ">Change Graph (24h) </th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr className="bg-slate-100 border border-slate-50" key={coin.id}>
                <td className="py-1">
                  <Image
                    className="m-auto bg-white p-1 rounded-lg"
                    src={coin?.image}
                    alt={coin?.id}
                    width={30}
                    height={30}
                  />
                </td>
                <td className="py-1 ">{coin.name}</td>
                <td className="py-1 ">
                  {priceDecimalFormatter(coin.current_price)}
                </td>
                <td className="py-1 ">
                  {priceDecimalFormatter(coin.total_volume)}
                </td>
                {/* eslint-disable multiline-ternary */}
                <td
                  className={`py-1  ${
                    coin?.market_cap_change_percentage_24h &&
                    coin?.market_cap_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  %{coin.market_cap_change_percentage_24h}
                </td>
                {/* eslint-enable multiline-ternary */}
                <td className="py-1 ">
                  <TinyLineChart
                    highValue={coin?.high_24h ?? 0}
                    lowValue={coin?.low_24h ?? 0}
                    price_change_24h={coin?.price_change_24h ?? 0}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
