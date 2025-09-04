export interface ImgCardProps {
  img: string;
  leftText: string;
  leftColor: "text-black" | "text-white" | "text-brand" | "text-greytext";
  rightText: string;
  rightColor: "text-black" | "text-white" | "text-brand" | "text-greytext";
}
export interface CardsOfImageProps {
  imageObj: ImgCardProps[];
}

export interface ContentStructureProp {
  alignContent?: "left" | "center" | "right";
  showBtn?: boolean;
  showSubText?: boolean;
  reversePosition?: boolean;
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
  img?: string;
  imgExtraStyle?: string;
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
