import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";

export default function Header() {

  function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    const hamburguer = document.querySelector(".hamburguer");
    hamburguer.classList.toggle("active");
  }
  

  return (
    <S.Container>
      <S.BoxTitle>
        <Link to="/" >
        <S.Title>Lipeflix</S.Title>
            </Link>
      </S.BoxTitle>
       
      <S.Nav>
        <S.btn_mobile onClick={toggleMenu}>
          menu
          <div className='hamburguer'></div>
        </S.btn_mobile>
        <ul className='menu'>
          <li>
            <Link to="/" onClick={toggleMenu} >
              <S.TitleNav>Homepage</S.TitleNav>
            </Link>
          </li>
          <li>
            <Link to="/Movies" onClick={toggleMenu}>
              <S.TitleNav>Filmes</S.TitleNav>
            </Link>
          </li>
          <li>
            <Link to="/Series" onClick={toggleMenu}>
              <S.TitleNav>Series</S.TitleNav>
            </Link>
          </li>
        </ul>
       
      </S.Nav>
    </S.Container>
  );
}
