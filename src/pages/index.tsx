import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../component/Footer";
import Header from "../component/Header";

const GlobalStyled = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {color: inherit; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none; color:inherit; background-color:inherit;}
  
  * {
    box-sizing: border-box;
  }
`;

const MainContainer = styled.div`
  position: absolute;
  background-color: gray;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoContainer = styled.section`
  height: 60vh;
`;

const SkillStackContainer = styled.section`
  height: 60vh;
`;

const PostListContainer = styled.section`
  height: 60vh;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyled />
      <MainContainer>
        <Header />
        <InfoContainer>
          <h1>InfoContainer</h1>
        </InfoContainer>
        <SkillStackContainer>
          <h1>SkillStackContainer</h1>
        </SkillStackContainer>
        <PostListContainer>
          <h1>PostListContainer</h1>
        </PostListContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default IndexPage;
