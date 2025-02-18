import { FloatingMenuProps } from './FloatingButtonMenu.interface';
import { Children } from 'react';

export const FloatingMenu = ({
  toggleMenu,
  isOpen,
  slideSpeed,
  mainButton,
  bgColor,
  spacing,
  children,
}: FloatingMenuProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <ul className={`m-0 flex flex-col-reverse p-0`}>
      <li
        onClick={toggleMenu}
        style={{ backgroundColor: bgColor, marginTop: `${spacing}px` }}
        className={`relative grid place-items-center rounded-full p-3 lg:cursor-pointer`}
      >
        <div
          className={`transition ease-in-out 
          ${isOpen ? 'rotate-0' : 'rotate-[360deg]'} duration-${slideSpeed}`}
        >
          {mainButton}
        </div>
      </li>
      {arrayChildren.map((child, index) => (
        <li
          key={index}
          style={{ backgroundColor: bgColor, marginTop: `${spacing}px` }}
          className={`relative z-0 grid translate-y-full place-items-center rounded-full p-3 transition ease-in-out lg:cursor-pointer
          ${isOpen ? 'translate-y-0 scale-100' : 'scale-0'}
          duration-${slideSpeed}`}
        >
          {child}
        </li>
      ))}
    </ul>
  );
};
