import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { StaticImage } from "gatsby-plugin-image";

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 20px;

  background-color: #3ed2ce;
`;

const Post = styled(Link)`
  font-weight: 600;

  p {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export default function Header() {
  return (
    <Responsive>
      <HeaderBlock>
        <Link to="/">
          <StaticImage
            src="../images/sample/header_logo_2.png"
            alt="Logo"
            layout="fixed"
            width={128}
            height={58}
          />
        </Link>

        <Post to="/post">
          <p>Posts</p>
        </Post>
      </HeaderBlock>
    </Responsive>
  );
}
