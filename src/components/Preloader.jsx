import React, { useEffect, useState } from "react";

function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div id="preloader" className={isLoaded ? "preloader loaded" : "preloader"}>
      <div className="spinner">
        <div className="spinner-grow" role="status"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="preloader-screens">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Preloader;
