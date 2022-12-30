import React from 'react';
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;


`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Input = styled.input`
    border: none;
`;
//flex: 1 apportions equal width for the left, center and right texts
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center; 
    margin-left: 25px;
    padding: 5px;
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin: 25px
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language> 
            <SearchContainer>
                <Input />
                <Search style={{color: "gray", fontSize: "16px"}}/>
            </SearchContainer>
            </Left>
            <Center><Logo>GRAD.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
