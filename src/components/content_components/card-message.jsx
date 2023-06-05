import Draggable from "react-draggable";

export const CardMessage = (props) => {
  return (
    <div className="relative mb-2 bg-white border border-gray-900 rounded-3xl shadow">
      <Draggable>
        <div className="w-full h-full flex justify-center items-center absolute bg-white border border-gray-900 rounded-3xl">
          <h2 className="text-lg font-coming font-bold">{props.teaser}</h2>
        </div>
      </Draggable>
      <div className="m-4">
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
