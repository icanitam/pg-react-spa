import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Root = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
