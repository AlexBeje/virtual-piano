import React, { ReactElement } from "react";

interface pianoProps {
  whitePianoKeys: string[];
  blackPianoKeys: string[];
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function piano({
  whitePianoKeys,
  blackPianoKeys,
  handleClick,
}: pianoProps): ReactElement {
  const whiteKeys = whitePianoKeys.map((key, i) => {
    /* TODO: Styled component */
    return (
      <div onClick={handleClick} key={key + i}>
        {key}
      </div>
    );
  });
  const blackKeys = blackPianoKeys.map((key, i) => {
    /* TODO: Styled component */
    return (
      <div onClick={handleClick} key={key + i}>
        {key}
      </div>
    );
  });
  return (
    <div>
      {whiteKeys}
      {blackKeys}
    </div>
  );
}

export default piano;
