//HEADER COMPONENT

//IMPORTING
import React from 'react';
import Link from 'next/link';
import Button from './button';
import { nav } from '../../src/utils/localdata';

//HEADER
export default function Header() {
  //RETURN
  return (
    <header className="header" data-scroll-section>
      <div className="box">
        <Link href="/">
          <a className="logo">
            <img src="/logo/logo.svg" alt="Logo" />
          </a>
        </Link>
      </div>
      <div className="box">
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <Button href={`#` + `${item.link}`} className="-skew">
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
        <Button href="#contacts" className="-outline -skew">
          Orçamento Online
        </Button>
      </div>
    </header>
  );
}
