import { Route, Routes, useNavigate } from "react-router-dom";
import AnyPage from "../components/AnyPage/AnyPage";
import ContactDetail from "../components/Contact/ContactDetail";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Contact = () => {
  const navigate = useNavigate();

  const goToDetailHandler = () => {
    // navigate("/contact/detail/1/?name=John");
    navigate({
      pathname: "/contact/detail/1",
      search: "?name=abc",
    });
  };
  return (
    <>
      <Card className="login__box">
        <p>You are in the Contact Page</p>
        <Button onClick={goToDetailHandler} type="button">
          go to detail
        </Button>
      </Card>
      {/* Method 1 */}
      <Routes>
        <Route path="detail" element={<ContactDetail />} />
        <Route path="detail/:id" element={<AnyPage />} />
      </Routes>
    </>
  );
};
export default Contact;
