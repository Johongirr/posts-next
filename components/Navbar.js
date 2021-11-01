import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="header">
      <Link href="/">
        <a className="header__logo-box">
          <Image
            width="150px"
            height="80px"
            className="header__logo"
            src="/vercel.svg"
            alt=""
          />
        </a>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link href="/">
              <a className="header__link">Home</a>
            </Link>
          </li>
          <li className="header__item">
            <Link href="/about">
              <a className="header__link"> About</a>
            </Link>
          </li>
          <li className="header__item">
            <Link href="/posts/">
              <a className="header__link">Posts List</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
