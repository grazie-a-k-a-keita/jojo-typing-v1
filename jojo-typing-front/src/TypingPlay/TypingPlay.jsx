import React from "react";

const TypingPlay = (props) => {
  return (
    <>
      {props.showGame ? (
        <>
          <div>タイピングゲーム</div>
          <div>ゲージ</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TypingPlay;
