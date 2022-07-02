import React from "react";
import styled from "styled-components";

const SkillStackContainer = styled.section`
  background-color: blue;
`;

interface SkillStackContainerI {
  className: string;
}

export default function SkillStackComponent({
  className,
}: SkillStackContainerI) {
  return (
    <SkillStackContainer className={className}>
      <h1>SkillStackContainer</h1>
    </SkillStackContainer>
  );
}
