import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

// import Input from "@material-ui/Input";
// or
// import { Input } from '@mui/material';

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <NavLogo>
          <img src="https://i.imgur.com/7I9Was5.png" />
        </NavLogo>
      </Link>

      <NavOptionAddress>
        <LocationOnIcon />
        <NavOption>
          <OptionLineOne>Hello,</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </NavOption>
      </NavOptionAddress>

      <NavSearch>
        <NavSearchMenu>
          <option value="">All</option>
          <option value="">abc</option>
          <option value="">abc</option>
          <option value="">abc</option>
        </NavSearchMenu>

        <NavSearchInput type="text" />

        <NavSearchIcon>
          <SearchIcon />
        </NavSearchIcon>
      </NavSearch>

      <NavItems>
        <NavOption>
          <OptionLineOne>Hello, Hashmat</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </NavOption>

        <NavOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </NavOption>

        <Link to="/cart">
          <NavOptionCart>
            <ShoppingBasketIcon />
            <CartCount>4</CartCount>
          </NavOptionCart>
        </Link>
      </NavItems>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  /* border: 1px solid red; */
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  gap: 25px;
  padding: 0 25px;
`;

const NavLogo = styled.div`
  img {
    width: 100px;
  }
`;

const NavOptionAddress = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 4px;
  align-items: center;
`;

const OptionLineOne = styled.div`
  /* border: 1px solid red; */
`;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const NavSearch = styled.div`
  flex-grow: 1;
  display: flex;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const NavSearchMenu = styled.select`
  background-color: #f3f3f3;
  border: none;
  border-right: 1px solid lightgray;
  padding: 0 6px;
  :focus {
    outline: none;
  }
`;

const NavSearchInput = styled.input`
  flex-grow: 1;
  border: none;
  :focus {
    outline: none;
  }
`;

const NavSearchIcon = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItems = styled.div`
  /* border: 1px solid red; */
  align-items: center;
  display: flex;
  gap: 25px;
`;

const NavOption = styled.div``;

const NavOptionCart = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
`;

const CartCount = styled.div`
  font-weight: 500;
  color: #febd69;
  font-size: small;
`;