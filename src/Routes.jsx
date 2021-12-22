import {Routes as BrowserRoutes, Route} from "react-router-dom";
import Emails from "./pages/Emails";
import ReleaseRequest from "./pages/ReleaseRequest";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/release-request" element={<ReleaseRequest />} />
      <Route path="/release-request/emails" element={<Emails />} />
    </BrowserRoutes>
  );
};

export default Routes;
