import Login from "./components/Login/Login";

import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import AboutDetail from "./components/About/AboutDetail";
import { Component } from "react";
import Button from "./components/UI/Button";

// const App = () => {
//   return (
//     <>
//     {/* This makes the header persist on all pages */}
//       <Header />

//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/contact/*"   element={<Contact />} />
//         <Route path="/about"  element={<About />}>
//           {/* Method 2 */}
//            <Route path="aboutdetail" element={<AboutDetail />} />
//         </Route>

//       </Routes>
//     </>
//   );
// };
// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      details: { name: "Joel", age: 30 },
      hasError: false,
    };
  }
  // componentDidCatch(error){
  //   this.setState({hasError: true})
  // }

  componentDidMount() {}

  componentDidUpdate() {}

  handleClickHandler() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const list = [1, 2, 3, 4, 5];
    const items = list.map((item) => <p key={item}>{item}</p>);
    // console.log('App is Executed')
    return (
      <>
        <Header />
        <Button onClick={this.handleClickHandler.bind(this)}>Click</Button>
        <p>{`${this.state.isLoggedIn}`}</p>
        <ul>{items}</ul>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contact/*" exact element={<Contact />} />
          <Route path="/about" exact element={<About />}>
            {/* Method 2 */}
            <Route path="aboutdetail" element={<AboutDetail />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;

const child = (props) => {
  console.log(props.name);
  console.log(props["name"]);
};

const parent = () => {
  const data = { name: "Joel", age: 30, school: "AltSchool" };
  child(data);
};

// parent()

// test('hello')
// test([1,2,3,4])
// tes

const data = { name: "Joel", age: 30, school: "AltSchool" };

// console.log(myAge)

// const root = document.getElementById("root");

// const getDataFn = function(e){
//   console.log("Okay", e);
// };

// root.addEventListener("click", getDataFn);
