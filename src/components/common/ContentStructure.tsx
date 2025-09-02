"use client";
import React from "react";
import Text from "./Text";
import Button from "./Button";

interface ContentStructureProps {
  alignContent?: "left" | "center" | "right";
  showBtn?: boolean;
  showSubText?: boolean;
  numOfBtns?: number;
  btnTypeLeft?: "default" | "borderType";
  btnTypeRight?: "default" | "borderType";
  title: string;
  subtitle?: string;
  leftBtnText?: string;
  rightBtnText?: string;
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
  title = "",
  subtitle = "",
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
        fontSize="medium"
        fullWidth={true}
        fontWeight="medium"
      />
    ) : btnTypeLeft === "default" ? (
      <Button
        whileHover={{ y: -5, scale: 1.04, rotate: 3 }}
        text={leftBtnText}
        animationType="slant"
        fontSize="medium"
        fullWidth={true}
        fontWeight="semibold"
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
        fontSize="medium"
        fontWeight="medium"
        fullWidth={true}
      />
    ) : btnTypeRight === "default" ? (
      <Button
        text={rightBtnText}
        animationType="slant"
        fontSize="medium"
        fontWeight="semibold"
        fullWidth={true}
      />
    ) : (
      <></>
    );
  return (
    <div className={`font-manrope text-center mt-14 sm:mt-20`}>
      <Text text={title} fontSize="huge" fontWeight="semibold" extraStyles="" />
      {showSubText && (
        <Text
          text={subtitle}
          textColor="text-greytext"
          fontSize="normal"
          fontWeight="medium"
          extraStyles="pt-8"
        />
      )}
      {showBtn && (
        <div className="">
          {numOfBtns === 1 ? (
            <>
              {/* if 1 btn show the two base on the one selected by the user  */}
              <div className="pt-8 flex justify-center items-center gap-6 pb-8">
                {leftBtnText && btntypeLeft}{" "}
              </div>
            </>
          ) : numOfBtns === 2 ? (
            <>
              <div className="pt-8 block px-5 sm:flex sm:px-0  w-full sm:flex-row justify-center items-center gap-6 pb-8">
                {/* if 2 btn show the two base on the one selected by the user  */}
                {leftBtnText && btntypeLeft} {rightBtnText && btntypeRight}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentStructure;
