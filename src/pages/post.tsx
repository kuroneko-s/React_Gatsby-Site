import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  background-color: red;
`;

function Post() {
  return (
    <PostContainer>
      <h1>Post Page</h1>
    </PostContainer>
  );
}

export default Post;
