import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  background-color: red;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function Post() {
  return (
    <PostContainer>
      <h1>Post Page</h1>
    </PostContainer>
  );
}

export default Post;
