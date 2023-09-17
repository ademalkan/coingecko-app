import Image from "next/image";
import React from "react";
import HoverAnimation from "../HoverAnimation";

const NotFoundCoin = (): React.ReactNode => {
  return (
    <div className="w-full flex items-center justify-center flex-col h-4/5">
      <HoverAnimation className="flex flex-col items-center text-center">
        <Image
          src={"/images/coin-gecko.png"}
          width={150}
          height={150}
          alt="coingecko-app Api Fetch Error Image"
        />
        <h1>Not found any coins</h1>
      </HoverAnimation>
    </div>
  );
};

export default NotFoundCoin;
