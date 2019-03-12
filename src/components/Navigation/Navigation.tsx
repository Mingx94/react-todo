import React from 'react';
import './Navigation.css';

interface Props {
  active: number;
  navLinks: string[];
  onActiveChange: (state: number) => void;
}

const navigation = (props: Props) => {
  const navLinks = props.navLinks.map((showState, index) => (
    <li
      className="NavigationItem"
      key={showState}
      onClick={e => {
        e.preventDefault();
        props.onActiveChange(index);
      }}
    >
      <a href="#" className="NavigationLink">
        {showState}
      </a>
    </li>
  ));
  return (
    <nav className="Nav">
      <ul className="NavigationItems">
        <div
          className="NavigationItemsSlider"
          style={{
            transform: `translateX(${props.active * 100}%)`,
          }}
        />
        {navLinks}
      </ul>
    </nav>
  );
};

export default navigation;
