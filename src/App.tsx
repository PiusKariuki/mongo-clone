import Events from "modules/events/Events";
import Topbar from "modules/topbar/Topbar";
import React from "react";


const App: React.FC = ():JSX.Element => {
  return (
    <div className="flex flex-col m-0">
      <Events />
      <Topbar />
    </div>
  );
};

export default App;
