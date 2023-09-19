import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BigmMobiles, mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from "../redux/userRedux";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  ${BigmMobiles({ height: "50px" })}

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  ${BigmMobiles({ padding: "10px 0px" })}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${BigmMobiles({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
  ${BigmMobiles({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;



const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;  
  ${mobile({ fontSize: "24px" })}
  ${BigmMobiles({ fontSize: "22px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${BigmMobiles({ flex: 2, justifyContent: "center", margin: "0px 5px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })} 
  ${BigmMobiles({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' type="text"></Input>
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>LEBER</Logo>
          </Link>
        </Center>
        <Right>

          {!currentUser ? (
            <>
              <Link style={{ textDecoration: "none", color: "black" }} to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none", color: "black" }} to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <MenuItem onClick={handleLogOut}>LOGOUT</MenuItem>
          )}

          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;