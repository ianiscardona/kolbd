import React from "react";
import { CardMessage } from "../components/content_components/card-message";
import ContentMessagesData from "../components/content_components/data/content-messages-data";

export const ContentMessages = () => {
  const cardContent = ContentMessagesData.map((person) => {
    return (
      <CardMessage
        key={person.id}
        message={person.message}
        name={person.name}
        nickname={person.nickname}
        teaser={person.teaser}
      />
    );
  });
  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden border-t-2 border-gray-900 bg-[#f5a098]">
      <h2 className="my-5 font-coming font-bold text-2xl text-black">
        These people love you! 👇
      </h2>
      <div className="w-[90%] md:w-[80%] lg:w-[65%]">{cardContent}</div>
    </div>
  );
};
