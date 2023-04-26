export interface Props{
    direction?: string
    bg?: string
    typeButton?: string
    type?: string
}
export interface SlideInd{
    slideIndex:number
}

export interface IProducts {
  categories: string[];
  color: string[];
  desc: string;
  img: string;
  inStock: boolean;
  price: string;
  size: string[];
  title: string;
  createdAt: Date,
  [key: string]: any;
}

export interface ICart {
  products: IProducts[];
  quantity: number;
  total: number;
}

export interface FormProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  total: number
}