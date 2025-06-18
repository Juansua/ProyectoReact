import React from "react";
import icons from "../../../assets/icons";

function Searchbar() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${icons.search})`,
        backgroundPosition: "0.5rem center",
      }}
    >
      <input className="px-4 bg-transparent" type="text" placeholder="Search" />
    </div>
  );
}

export default Searchbar;
