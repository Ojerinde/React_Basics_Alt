import { Outlet } from "react-router-dom";
import Card from "../components/UI/Card";

const About = () => {
  return (
    <>
      <Card className="login__box">
        <p>You are in the About Page</p>
      </Card>
      <Outlet />
    </>
  );
};
export default About;
