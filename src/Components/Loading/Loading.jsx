import React from "react";
import loading from "../../assets/Loading.gif";
const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <img src={loading} className="w-96 h-96 object-contain" alt="" />
    </div>
  );
};

export default Loading;
