import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Emails from "./pages/Emails";
import ReleaseRequest from "./pages/ReleaseRequest";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/releaserequest" element={<ReleaseRequest />} />
      <Route path="/emails" element={<Emails />} />
    </BrowserRoutes>
  );
};

export default Routes;
