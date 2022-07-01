import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 100%;

  @media screen and (max-width: 520px) {
    max-width: 520px;
  }
`;

export default function Responsive({ children }: any) {
  return <ResponsiveBlock>{children}</ResponsiveBlock>;
}
