'use client';
import { createContext, Dispatch, useContext, useState } from 'react';

// define the props for the menu context
interface MenuProps {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

//create the context
const MenuContext = createContext<MenuProps | null >(null);

// define the children to receive the props
interface MenuProviderProps {
    children: React.ReactNode;
}
export default function MenuProvider({ children }: MenuProviderProps ) {
    const [isOpen, setIsOpen ] = useState<boolean>(false)
  return (
    <MenuContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </MenuContext.Provider>
  )
}

// use the context


export const UseMenuContext = () => {
    const context = useContext(MenuContext);
  if(context === null){
    throw new Error("use menu context under a provider");
  }
  return context;
}
