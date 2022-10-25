import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";

import { RoutesApp } from "./routes";
import SideNav from "./components/shared/sidenav";
import { PATHS } from "./constants";

const App = () => (
  <Router basename={PATHS.BASENAME}>
    <div className="wrapper">
      <SideNav />

      <Suspense fallback={<div>Loading...</div>}>
        <div className="content">
          <div className="content">
            <RoutesApp />
          </div>
        </div>
      </Suspense>
    </div>
  </Router>
);

export default App;
