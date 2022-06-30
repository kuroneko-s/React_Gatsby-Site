import styled from "styled-components";
import React from "react";
import * as Common from "../common";

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 10px 20px;
  margin-top: 3px;

  background-color: gray;
  border-top: 1px solid white;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  font-size: 1.1rem;
`;

export default function Footer() {
  const { GIT_ADDRESS, EMAIL_ADDRESS } = Common;

  return (
    <FooterContainer>
      <FooterInfoContainer>
        <div>
          <p>Site Name</p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <a href={GIT_ADDRESS} target="_blank">
            Github : {GIT_ADDRESS}
          </a>
          <p>&copy;Choi DongHyuk</p>
        </div>
        <div>
          <a href={`mailto: ${EMAIL_ADDRESS}`}>Email : {EMAIL_ADDRESS}</a>
        </div>
      </FooterInfoContainer>
    </FooterContainer>
  );
}
