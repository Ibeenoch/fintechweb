"use client";
import React from "react";
import AnimateOnView from "../animation/AnimateOnView";
import Images from "./Images";
import Text from "./Text";

interface ImgCardProps {
  img: string;
  leftText: string;
  leftColor: "text-black" | "text-white" | "text-brand" | "text-greytext";
  rightText: string;
  rightColor: "text-black" | "text-white" | "text-brand" | "text-greytext";
}
interface CardsOfImageProps {
  imageObj: ImgCardProps[];
}

const ImgCard: React.FC<CardsOfImageProps> = ({ imageObj }) => {
  return (
    <section
      aria-labelledby="main-pages-images"
      className="grid grid-cols-1 items-center justify-center py-6 md:grid-cols-2 lg:grid-cols-[31%_31%_31%] px-4 gap-6"
    >
      {imageObj.map((img, i) => (
        <AnimateOnView>
          <div className="rounded-lg flex flex-col border border-greytext/40 overflow-hidden">
            <Images img={img.img} />
            <Text
              text={
                <div className="flex gap-1 bg-lighterblack items-center justify-center p-6 border-t border-greytext/40">
                  <Text
                    text={img.leftText}
                    textColor={img.leftColor}
                    fontSize="large"
                    fontWeight="semibold"
                  />
                  <Text
                    text={img.rightText}
                    textColor={img.rightColor}
                    fontSize="large"
                    fontWeight="semibold"
                  />
                </div>
              }
            />
          </div>
        </AnimateOnView>
      ))}
    </section>
  );
};

export default ImgCard;
