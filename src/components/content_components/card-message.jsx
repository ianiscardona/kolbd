import Draggable from "react-draggable";
import React, { useState } from "react";

export const CardMessage = (props) => {
  const [revealed, setRevealed] = useState(false);

  const handleDrag = (event, dragData) => {
    // Determine if the div has been dragged enough to reveal the content
    if (dragData.deltaX > 100) {
      setRevealed(true);
    }
  };
  return (
    <div className="relative mb-2 bg-white border border-gray-900 rounded-3xl shadow p-4 mx-auto">
      {/* <Draggable onDrag={handleDrag}>
        <div className="w-full h-full absolute">DRAINIENRIE</div>
      </Draggable> */}
      <div>
        <h2 className="text-xl font-coming mb-2">{props.message}</h2>
        <div className="flex flex-col items-end">
          <div>
            <h3 className="text-lg font-coming font-bold">{props.name}</h3>
            <p className="font-patrick text-gray-600">{props.nickname}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
