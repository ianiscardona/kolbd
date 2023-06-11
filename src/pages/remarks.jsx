import React from "react";

export const Remarks = () => {
  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden border-t-2 border-gray-900 bg-[#f5b498]">
      <h2 className="mt-5 mb-1 font-coming text-xl text-black">
        Happy Birthday to
      </h2>
      <h2 className="mb-4 font-coming font-bold text-3xl text-black">
        Jericho!
      </h2>
      <h2 className="mb-10 font-coming text-xl text-black">
        Thank you <span className="font-bold">Tanya</span> and{" "}
        <span className="font-bold">Echo</span> for gathering messages and thank
        you <span className="font-bold">everyone </span>
        for the kind messages! 📩
      </h2>
    </div>
  );
};
