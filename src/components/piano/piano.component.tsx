import React, { ReactElement } from "react";

import styled from "styled-components";

type pianoProps = {
  whitePianoKeys: string[];
  blackPianoKeys: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// Styled components
const WhiteKey = styled.button`
  background-color: #f4f4f4;
  width: 100px;
  height: 300px;
  border: 1px solid black;
  transition: 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #e0e0e0;
  }
`;

// Styled components
const BlackKey = styled.button<{ transparent?: boolean }>`
  background-color: #0a0a0a;
  width: ${(props) => (!props.transparent ? "50px" : "0")};
  margin-left: ${(props) => (!props.transparent ? "0" : "50px")};
  height: 200px;
  margin-top: -300px;
  margin-right: 50px;
  transition: 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:first-child {
    margin-left: 75px;
  }
  &:hover {
    background-color: #252525;
  }
`;

function piano({
  whitePianoKeys,
  blackPianoKeys,
  handleClick,
}: pianoProps): ReactElement {
  const whiteKeys = whitePianoKeys.map((key, i) => {
    return (
      <WhiteKey onClick={(e) => handleClick(e)} key={key + i} value={key} />
    );
  });
  const blackKeys = blackPianoKeys.map((key, i) => {
    return key ? (
      <BlackKey onClick={(e) => handleClick(e)} key={key + i} value={key} />
    ) : (
      <BlackKey transparent key={key + i} />
    );
  });
  return (
    <div>
      <div className="flex">{whiteKeys}</div>
      <div className="flex">{blackKeys}</div>
    </div>
  );
}

export default piano;
