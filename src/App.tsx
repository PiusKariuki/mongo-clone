import Build from "modules/build-section/Build";
import Events from "modules/events/Events";
import Topbar from "modules/topbar/Topbar";
import React from "react";



const App: React.FC = ():JSX.Element => {
  return (
    <div className="flex flex-col m-0">
      <Events />
      <Topbar />
      <Build />
    </div>
  );
};

export default App;
