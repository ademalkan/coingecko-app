import { LineChart, Line } from "recharts";

interface TinyLineChartPropsI {
  highValue: number;
  lowValue: number;
  price_change_24h: number;
}

const TinyLineChart = (props: TinyLineChartPropsI): React.ReactNode => {
  const { highValue, lowValue,price_change_24h } = props;

  const data = [
    { name: "High", value: highValue },
    { name: "Low", value: lowValue },
  ];

  return (
    <LineChart className="m-auto" width={120} height={46} data={data}>
      <Line
        type="step"
        dataKey="value"
        stroke={`${price_change_24h > 0 ? "green" : "red"}`}
      />
    </LineChart>
  );
};

export default TinyLineChart;
