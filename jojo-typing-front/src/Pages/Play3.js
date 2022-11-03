import React, { useState } from "react";
import TypingGame from "../TypingPlay/TypingPlay";
import PlayModal from "../Modal/PlayModal";

function Play3() {
  const [showModal, setShowModal] = useState(true);
  const [subHeading, setSubHeading] = useState("○部コース");
  return (
    <>
      <div>Header</div>
      <TypingGame />
      <div>Footer</div>
      <PlayModal
        showFlag={showModal}
        setShowModal={setShowModal}
        subHeading={subHeading}
        setSubHeading={setSubHeading}
      />
    </>
  );
}

export default Play3;
