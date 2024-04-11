import React from "react";

export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi ! What's up??
      </div>
      <div className={"chat-footer opacity-50 text-xs gap-1 items-center"}>
        12:42
      </div>
    </div>
  );
}
