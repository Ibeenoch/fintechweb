"use client";
import React from "react";
import Text from "./Text";
import Button from "./Button";

interface ContentStructureProps {
  alignContent?: "left" | "center" | "right";
  showBtn?: boolean;
  leftBtnFullWidth?: boolean;
  rightBtnFullWidth?: boolean;
  showSubText?: boolean;
  numOfBtns?: number;
  btnTypeLeft?: "default" | "borderType";
  btnTypeRight?: "default" | "borderType";
  title: string;
  subtitle?: string | React.ReactNode;
  leftBtnText?: string;
  extraStylesTop?: string;
  rightBtnText?: string;
  space?: string;
  topSpacing?: string;
  fontWeightTop?:
    | "slim"
    | "thin"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  fontSizeTop?:
    | "extra-small"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "extraLarge"
    | "huge"
    | "extrahuge";
  fontWeightBottom?:
    | "slim"
    | "thin"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  fontSizeBottom?:
    | "extra-small"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "extraLarge"
    | "huge"
    | "extrahuge";
  fontWeightBtn?:
    | "slim"
    | "thin"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";
  fontSizeBtn?:
    | "extra-small"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "extraLarge"
    | "huge"
    | "extrahuge";
}

const ContentStructure: React.FC<ContentStructureProps> = ({
  alignContent = "center",
  showBtn = false,
  showSubText = true,
  numOfBtns = 1,
  btnTypeLeft,
  btnTypeRight,
  rightBtnText,
  leftBtnText,
  leftBtnFullWidth,
  rightBtnFullWidth,
  title = "",
  subtitle = "",
  space = "pt-8",
  topSpacing = "mt-14 md:mt-20",
  fontWeightBottom,
  fontWeightTop,
  fontWeightBtn,
  fontSizeBottom,
  extraStylesTop,
  fontSizeTop,
  fontSizeBtn,
}) => {
  const btntypeLeft =
    btnTypeLeft === "borderType" ? (
      <Button
        whileHover={{ y: -5, scale: 1.04, rotate: 3 }}
        text={leftBtnText}
        backgroundColor="bg-none hover:bg-brand"
        showBorder={true}
        textColor="text-white group-hover:text-black"
        animationType="slant"
        fontSize={fontSizeBtn}
        fullWidth={leftBtnFullWidth}
        fontWeight={fontWeightBtn}
      />
    ) : btnTypeLeft === "default" ? (
      <Button
        whileHover={{ y: -5, scale: 1.04, rotate: 3 }}
        text={leftBtnText}
        animationType="slant"
        fontSize={fontSizeBtn}
        fullWidth={leftBtnFullWidth}
        fontWeight={fontWeightBtn}
      />
    ) : (
      <></>
    );
  const btntypeRight =
    btnTypeRight === "borderType" ? (
      <Button
        text={rightBtnText}
        backgroundColor="bg-none hover:bg-brand"
        showBorder={true}
        textColor="text-white group-hover:text-black"
        animationType="slant"
        fontSize={fontSizeBtn}
        fontWeight={fontWeightBtn}
        fullWidth={rightBtnFullWidth}
      />
    ) : btnTypeRight === "default" ? (
      <Button
        text={rightBtnText}
        animationType="slant"
        fontSize={fontSizeBtn}
        fontWeight={fontWeightBtn}
        fullWidth={rightBtnFullWidth}
      />
    ) : (
      <></>
    );
  return (
    <article
      className={`font-manrope ${
        alignContent === "center"
          ? "text-center"
          : alignContent === "left"
          ? `text-justify`
          : `text-right`
      } ${topSpacing}`}
    >
      <Text
        text={title}
        fontSize={fontSizeTop}
        fontWeight={fontWeightTop}
        extraStyles={extraStylesTop}
      />
      {showSubText && (
        <Text
          text={subtitle}
          textColor="text-greytext"
          fontSize={fontSizeBottom}
          fontWeight={fontWeightBottom}
          extraStyles={`${space}`}
        />
      )}
      {showBtn && (
        <div className="">
          {numOfBtns === 1 ? (
            <>
              {/* if 1 btn show the two base on the one selected by the user  */}
              <div className={`${space} pb-8`}>
                {leftBtnText && btntypeLeft}{" "}
              </div>
            </>
          ) : numOfBtns === 2 ? (
            <>
              <div
                className={`${space} flex flex-col md:flex-row gap-2 md:gap-4 pb-8`}
              >
                {/* if 2 btn show the two base on the one selected by the user  */}
                {leftBtnText && btntypeLeft} {rightBtnText && btntypeRight}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </article>
  );
};

export default ContentStructure;
