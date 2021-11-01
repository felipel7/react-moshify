import React, { useEffect } from "react";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      // // moshy
      // duration: 500,
      // delay: 0,
      // easing: "ease",

      disable: false,
      startEvent: "load",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease-in-out-quad",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <Home />;
}
