import React, { MouseEventHandler } from "react";
import HoverAnimation from "../HoverAnimation";

interface ActionButtonPropsI {
  text: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  isHoverAnimationReset?: boolean;
  className?: string;
}

const ActionButton = (props: ActionButtonPropsI): React.ReactNode => {
  const { text, onClickHandler, isHoverAnimationReset, className } = props;
  return isHoverAnimationReset ? (
    <button
      className={`cursor-pointer font-medium bg-slate-300 rounded-lg py-1 px-3 ${className}`}
      disabled={false}
      onClick={onClickHandler}
    >
      {text}
    </button>
  ) : (
    <HoverAnimation>
      <button
        className="cursor-pointer font-medium bg-slate-300 rounded-lg py-1 px-3"
        disabled={false}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </HoverAnimation>
  );
};

export default ActionButton;
