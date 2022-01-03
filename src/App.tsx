import Build from "modules/build-section/Build";
import Cloud from "modules/cloud/Cloud";
import Developer from "modules/developer-section/Developer";
import Events from "modules/events/Events";
import Topbar from "modules/topbar/Topbar";
import Trustees from "modules/trustees/Trustees";
import React from "react";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col m-0 overflow-x-hidden relative">
      <Events />
      <div className="relative">
        <Topbar />
      </div>
      <Build />
      <Trustees />
      <Cloud />
      <Developer />
    </div>
  );
};

export default App;
