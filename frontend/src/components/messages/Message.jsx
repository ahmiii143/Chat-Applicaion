import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/user_account_profile_avatar_person-128.png"
            alt="Tailwind CSS Chat bubble"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hi, What's Up</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
