import { YouTube } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0px 10px;
`;
const Logo = styled.div`
  height: 30px;
  width: 60px;
  color: red;
`;
const Title = styled.div`
  font-size: 36px;
  color: white;
  font-weight: 500;
`;

const Header = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <YouTube fontSize="large" />
        </Logo>
        <Title>Youtube</Title>
      </Left>
    </Container>
  );
};

export default Header;
