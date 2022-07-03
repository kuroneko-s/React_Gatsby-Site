import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
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

function IndexPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const container = useRef<HTMLElement>(null);
  const lastPage = 3;
  let height = 0;
  let timeoutEvent: any;
  let _pageNumber = 1;

  const resizeHandler = () => {
    height = document.getElementById("___gatsby")?.clientHeight || 0;
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault(); // event 기능 동작 멈춰!

    clearTimeout(timeoutEvent); // timeout 중복 동작 방지
    timeoutEvent = setTimeout(() => changedPageNumber(e), 300);
  };

  const changedPageNumber = (e: WheelEvent) => {
    if (0 < e.deltaY) {
      if (_pageNumber != lastPage) {
        _pageNumber = _pageNumber + 1;
      }
    } else if (0 > e.deltaY) {
      if (_pageNumber != 1) {
        _pageNumber = _pageNumber - 1;
      }
    }

    if (container.current) {
      // page 값을 이용해서 top 위치 값 변경 ( 움직이는 것 처럼 보이는 곳 )
      const scrollyValue = (_pageNumber - 1) * height;
      container.current.style.top = `-${scrollyValue}px`;

      clearTimeout(timeoutEvent);
    }
  };

  window.addEventListener("resize", resizeHandler);
  window.addEventListener("wheel", wheelHandler, { passive: false });

  useEffect(() => {
    height = document.getElementById("___gatsby")?.clientHeight || 0;
  }, []);

  return (
    <>
      <GlobalStyled />
      <MainContainer ref={container}>
        <InfoComponent className="content" pageNumber={pageNumber} />
        <SkillStackComponent className="content" />
        <PostListComponent className="content" />
      </MainContainer>
    </>
  );
}

export default IndexPage;
