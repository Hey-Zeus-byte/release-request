import { Routes as BrowserRoutes, Route } from "react-router-dom";
import Emails from "./pages/Emails";
import ReleaseRequest from "./pages/ReleaseRequest";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Emails />} />
      <Route path="/release-request" element={<ReleaseRequest />} />
    </BrowserRoutes>
  );
};

export default Routes;
