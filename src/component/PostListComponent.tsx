import React from "react";
import styled from "styled-components";

const PostListContainer = styled.section`
  background-color: green;
`;

interface PostListComponentI {
  className: string;
}

export default function PostListComponent({ className }: PostListComponentI) {
  return (
    <PostListContainer className={className}>
      <h1>PostListContainer</h1>
    </PostListContainer>
  );
}
