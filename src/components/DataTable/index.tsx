import { CoingeckoI } from "@/utils/interfaces/coingecko-api";
import Image from "next/image";
import React from "react";
import TinyLineChart from "../TinyLineChart";
import { priceDecimalFormatter } from "@/utils/helpers";

interface DataTablePropsI {
  coins: CoingeckoI[];
}

const DataTable = (props: DataTablePropsI): React.ReactNode => {
  const { coins } = props;
  return (
    <table className="w-full table-auto text-center">
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
                src={coin.image}
                alt={coin.id}
                width={30}
                height={30}
              />
            </td>
            <td className="py-1 ">{coin.name}</td>
            <td className="py-1 ">{priceDecimalFormatter(coin.current_price)}</td>
            <td className="py-1 ">{priceDecimalFormatter(coin.total_volume  )}</td>
            <td
              className={`py-1  ${
                coin.market_cap_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              %{coin.market_cap_change_percentage_24h}
            </td>
            <td className="py-1 ">
              <TinyLineChart
                highValue={coin.high_24h}
                lowValue={coin.low_24h}
                price_change_24h={coin.price_change_24h}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
