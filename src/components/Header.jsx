import React from "react";
import { Link } from 'react-router-dom';

import AppLogo from '../images/Daco_40379.png';
import TMDBLogo from '../images/tmdb_logo.svg';
import ReactLogo from '../images/1280px-React-icon.svg.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg, ReactLogoImg } from "./HeaderStyles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={AppLogo} alt='pass-the-popcorn-logo' />
      </Link>
      <div>
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        <ReactLogoImg src={ReactLogo} alt='react-logo' />
      </div>
    </Content>
  </Wrapper>
);

export default Header;
