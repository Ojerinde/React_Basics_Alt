import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Card from "../UI/Card";

const AnyPage = () => {
  console.log('AnyPage is Executed')

  const { id } = useParams();
//   const { pathname, search } = useLocation();

//   const query = new URLSearchParams(search);
//   console.log(query)
//   const myName = query.get("name");
//   console.log(myName);
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams)
    const myName = searchParams.get('age');
    console.log(myName)
    // setSearchParams('age', 20)
  return (
    <Card>
      <p>AnyPage</p>
      <p>{id}</p>
    </Card>
  );
};
export default AnyPage;
