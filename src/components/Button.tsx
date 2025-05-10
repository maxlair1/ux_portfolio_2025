"use client";
import React from "react";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

type buttonProps = {
  dark?: boolean;
  iconBefore?: any;
  iconAfter?: any;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  enlargen?: boolean;
  margin?: boolean;
  appendStart?: ReactNode;
  appendEnd?: ReactNode;
};

const Button: React.FC<buttonProps> = ({
  enlargen = false,
  iconBefore,
  iconAfter,
  text = "Button",
  margin = true,
  onClick,
  appendStart,
  appendEnd,
}) => {
  const size = enlargen ? "p-[8px] rounded-md" : "py-[4px] px-[6px] rounded";
  const spaceBelow = margin ? "mb-1" : null;

  return (
      <button
        className={`flex items-center overflow-hidden cursor-pointer ${size} ${styles.rollButton} ${spaceBelow}`}
        onClick={onClick}
        type="button"
      >
        {appendStart && <span className="mr-2">{appendStart}</span>}
        {iconBefore && <i className={`ri-${iconBefore} mr-2`}></i>}
        <span className="grid h-[18px] overflow-hidden">
          <p className={`px-[4px] p-[2px] text-[14px] font-mono uppercase ${styles.buttonInnerText}`}>{text}</p>
          <p className={`px-[4px] p-[2px] text-[14px] font-mono uppercase ${styles.buttonInnerText}`}>{text}</p>
        </span>
        {iconAfter && <i className={`ri-${iconAfter} ml-2`}></i>}
        {appendEnd && <span className="ml-2">{appendEnd}</span>}
      </button>
  );
};

export default Button;
