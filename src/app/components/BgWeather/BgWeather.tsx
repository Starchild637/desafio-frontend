import React from "react";
import sunny from "assets/images/sunny.jpeg";

const BgWeather: React.FC<{ type: any }> = ({ type = sunny, children }) => {
  console.log(type);
  return (
    <div
      style={{
        backgroundImage: `url(${type})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        border: "0.1px solid transparent",
      }}
    >
      {children}
    </div>
  );
};

export default BgWeather;
