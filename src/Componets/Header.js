import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt=" " />
      </Logo>
    </Nav>
  );
}

const Nav = styled.nav`
  postion: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width:80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`;

export default Header;
