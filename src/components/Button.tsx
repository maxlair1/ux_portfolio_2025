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
  variant?: "default" | "secondary";
  margin?: boolean;
  appendStart?: ReactNode;
  appendEnd?: ReactNode;
  href?: string;
};

const Button: React.FC<buttonProps> = ({
  iconBefore,
  iconAfter,
  text = "Button",
  margin = true,
  onClick,
  appendStart,
  appendEnd,
  variant = "default",
  href = "#",
}) => {

  return (
    <a href={href}>
      <button
        className={`flex items-center overflow-hidden cursor-pointer py-3 px-4 ${styles.rollButton} ${variant === "secondary" ? "inline box-decoration-clone text-text-main bg-highlight" : ""}`}
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
    </a>
  );
};

export default Button;
