import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 20px;

  background-color: red;
`;

const Logo = styled.img``;

const Post = styled(Link)``;

export default function Header() {
  return (
    <Responsive>
      <HeaderBlock>
        <Link to="/">
          <Logo src="../images/sample/header_logo.png" alt="Logo" />
        </Link>

        <Post to="/post">
          <h1>Posts</h1>
        </Post>
      </HeaderBlock>
    </Responsive>
  );
}
