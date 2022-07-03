import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import { StaticImage } from "gatsby-plugin-image";
import { EMAIL_ADDRESS, GIT_ADDRESS } from "../common";

const InfoContainer = styled.section`
  background-color: #3ed2ce;
`;

const leftToRight = keyframes`
  from {
    left: 0;
    opacity: 0;
    transform: translateY(-100%);
    transform: translateX(-100%);
  }
  to {
    left: 0;
    opacity: 1;
    transform: translateY(0);
    transform: translateX(15rem);
  }
`;

const rightToLeft = keyframes`
  from {
    right: 0;
    opacity: 0;
    transform: translateY(100%);
    transform: translateX(100%);
  }
  to {
    right: 0;
    opacity: 1;
    transform: translateY(0);
    transform: translateX(-15rem);
  }
`;

const InfoContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 0;

  .leftToRight {
    animation: ${leftToRight} 1s forwards;
  }

  .rightToLeft {
    animation: ${rightToLeft} 1s forwards;
  }
`;

const Profile = styled.div`
  position: absolute;

  height: 70%;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid #ffffff5d;
  border-bottom: 1px solid #ffffff5d;

  -webkit-box-shadow: -9px -8px 12px -5px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: -9px -8px 12px -5px rgba(0, 0, 0, 0.43);
  box-shadow: -9px -8px 12px -5px rgba(0, 0, 0, 0.43);

  .profile_img {
    margin-bottom: 50px;
  }

  .profile_description {
    width: 80%;
    text-align: start;

    .profile_description-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-align: center;
    }

    p {
      margin-bottom: 8px;
    }
  }
`;

const Record = styled.div`
  position: absolute;

  height: 70%;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 20px;
  border-left: 1px solid #ffffff5d;
  border-top: 1px solid #ffffff5d;

  -webkit-box-shadow: 9px 8px 12px -5px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 9px 8px 12px -5px rgba(0, 0, 0, 0.43);
  box-shadow: 9px 8px 12px -5px rgba(0, 0, 0, 0.43);

  p {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;

interface InfoComponentI {
  className: string;
  pageNumber: number;
}

// pageNumber == 1
// 화면 바뀌는게 0.8초
// 해당 값 확인 후 1이면 0.5초 뒤 애니메이션 동작하게끔
function InfoComponent({ className, pageNumber }: InfoComponentI) {
  const profileRef = useRef(null);
  const recordRef = useRef(null);
  useEffect(() => {
    if (profileRef == undefined || recordRef == undefined) return;

    if (pageNumber != 1) {
    }
  }, [pageNumber]);

  return (
    <InfoContainer className={className}>
      <Header />
      <InfoContent>
        <Profile ref={profileRef} className="leftToRight">
          <StaticImage
            src="../images/sample/header_logo_2.png"
            alt="Logo"
            layout="fixed"
            className="profile_img"
          />
          <div className="profile_description">
            {/* TODO : DB같은 것을 추가하면 해당 값은 DB에서 가져올 수 있고 화면에서 수정 가능되도록... */}
            <h1 className="profile_description-title">ChoiDH Web Developer</h1>
            <p>2020/11/23 ~ JAVA Web 개발 중소 기업 입사</p>
          </div>
        </Profile>
        <Record ref={recordRef} className="rightToLeft">
          <p>
            Github: <a href={GIT_ADDRESS}>{GIT_ADDRESS}</a>
          </p>
          <p>
            Email: <a href={`mailto: ${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </p>
        </Record>
      </InfoContent>
    </InfoContainer>
  );
}

export default React.memo(InfoComponent);
