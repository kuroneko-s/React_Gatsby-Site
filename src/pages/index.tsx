import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { GlobalStyled } from "../common";
import Header from "../component/Header";

interface AnimationI {
  height: string;
}

const MainContainer = styled.section<AnimationI>`
  position: relative;
  background-color: gray;

  width: 100%;
  height: 100%;

  top: 0;

  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  transition: all 1.5s;
`;

const InfoContainer = styled.section`
  background-color: red;
`;

const SkillStackContainer = styled.section`
  background-color: blue;
`;

const PostListContainer = styled.section`
  background-color: green;
`;

export default function IndexPage() {
  const pageNumber = useRef(1);
  const container = useRef<HTMLElement>(null);
  let height = 0;

  useEffect(() => {
    window.addEventListener("resize", () => {
      height = document.getElementById("___gatsby")?.clientHeight || 0;
    });
  }, []);

  // TODO : F11버튼 감지해서 화면 정상적으로 동작하게끔 수정해야함 ..
  useEffect(() => {
    height = document.getElementById("___gatsby")?.clientHeight || 0;
    let lastPage = document.querySelectorAll(".content").length;

    function wheelHandler(e: WheelEvent) {
      window.removeEventListener("wheel", wheelHandler);

      e.preventDefault();
      let flag = setTimeout(() => {
        if (0 < e.deltaY) {
          if (pageNumber.current != lastPage) {
            pageNumber.current += 1;
          }
        } else if (0 > e.deltaY) {
          if (pageNumber.current != 1) {
            pageNumber.current -= 1;
          }
        }

        if (container.current) {
          const scrollyValue = (pageNumber.current - 1) * height;

          container.current.style.top = `-${scrollyValue}px`;
          clearTimeout(flag);
          window.addEventListener("wheel", wheelHandler, { passive: false });
        }
      }, 500);
    }

    window.addEventListener("wheel", wheelHandler, { passive: false });
  }, [height]);

  return (
    <>
      <GlobalStyled />
      <MainContainer ref={container}>
        <InfoContainer className="content">
          <Header />
          <h1>InfoContainer</h1>
        </InfoContainer>
        <SkillStackContainer className="content">
          <h1>SkillStackContainer</h1>
        </SkillStackContainer>
        <PostListContainer className="content">
          <h1>PostListContainer</h1>
        </PostListContainer>
      </MainContainer>
    </>
  );
}
