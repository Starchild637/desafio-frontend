import React from "react";
import rain from "assets/images/rain.jpg";

const BgWeather: React.FC<{ type: string }> = ({ type, children }) => {
  const getBgByType = () => {
    return rain;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${getBgByType()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "1px solid red",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default BgWeather;
