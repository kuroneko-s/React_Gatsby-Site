import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { GlobalStyled } from "../common";
import InfoComponent from "../component/InfoComponent";
import PostListComponent from "../component/PostListComponent";
import SkillStackComponent from "../component/SkillStackComponent";

interface AnimationI {
  height: string;
}

const MainContainer = styled.section<AnimationI>`
  position: relative;

  width: 100%;
  height: 100%;
  top: 0;

  transition: all 0.8s;

  .content {
    position: relative;
    width: 100%;
    height: 100%;
  }
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
        <InfoComponent className="content" />
        <SkillStackComponent className="content" />
        <PostListComponent className="content" />
      </MainContainer>
    </>
  );
}
