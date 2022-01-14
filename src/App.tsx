import Build from "modules/build-section/Build";
import Cloud from "modules/cloud/Cloud";
import Developer from "modules/developer-section/Developer";
import Events from "modules/events/Events";
import Footer from "modules/footer/Footer";
import Started from "modules/get-started/Started";
import Services from "modules/services/Services";
import Slider from "modules/slider-section/Slider";
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
      <Services />
      <Slider />
      <Started />
      <Footer />
    </div>
  );
};

export default App;
