import React from "react";
import { Link } from 'react-router-dom';

import AppLogo from '../images/react-movie-logo.svg';
import TMDBLogo from '../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./HeaderStyles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={AppLogo} alt='pass-the-popcorn-logo' />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
