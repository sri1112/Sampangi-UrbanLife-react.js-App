// import { useState } from 'react';
import './App.css';
// import 'logo192.png'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;

//count
/*
export default function Counter(){
  const [count, setCount] = useState(1)

  function handleClick(){
    setCount(count + 1);
  }
  return(
    <button onClick={handleClick}>
      you pressed me {count} time
    </button>
  )
}*/

// functional conmpoent
// function App(){
//   return(
//     <div> 
//       <center>
//         this is functional conmpoent
//         <App1 />
//       </center>
//     </div>
//   );
// }
// import React from "react";
// arrow function
 /*
const App = () => {
  return(
        <div>
          <center>
            <h1> this is arrow function </h1>
          </center>
      </div>
  );
} 
export default App;
*/
/*
//functional componenet with event handling
const App = () => {
  function handleClick(){
    console.log("button clicked");
    document.write("button clicked")
  }
  return(
    <div> 
      <center>
        <h1>Hello world</h1>
        <button onClick={handleClick}>Click me</button>
        
      </center>
    </div>
  )
}
export default App;
*/
// connectiong 2 functional componenet
// function ComponentOne(){

// }
//
import React from "react";
// import FatchApi from "./apifetch/FatchApi";
// import Flexboxs from './flexbox/Flexboxs';
import './flexbox/Flexbox.css'
import './index.css';
import Home from './sampangi/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';


// import EmpSalary from "./demo/EmpSalaryy";
// import Test from "./Test";
// import Google from "./demo/Google";
// import Gmail from "./demo/Gmail";
// import Fb from "./demo/Fb";
// import './css/Mystyle.css';
// // import ColorSchemesExample from './navbar/Navbar'    
// import Prop from './propss/Prop';
// import Obj from "./propss/Obj";
// import Classprops from "./propss/Classprops";
// import Classobj from "./propss/Classobj";
// import Spread from "./spread/Spread";
// import Spread1 from "./spread/Spread1";
// import Counter from "./hooks/Counter";
// import Checkbox from "./hooks/Checkbox";
// import InputField from "./hooks/InputField";
// // import { Dropdown } from "bootstrap";
// import DropDown from './hooks/Dropdown';
// import Count from "./hooks/usestate/Count";
// // import HighOdder from "./highoddfun/HighOdderFun";
// import UseRefNdEffect from "./hooks/UseRefNdUseEffect";
// import UseRed from "./hooks/reducer/UseRed";
// import Imagendaudio from "./demo/Imagendaudio";
// import Practice from "./propss/Practice";
// import Buttons from "./demo/Buttons";
// import Hook from './demo/Hook'
// import EvenOrNot from "./demo/EvenOrNot";
// import Evenodd from "./demo/Evenodd";
// import Student from "./demo/Student";
// import EmpSalaryy from "./demo/EmpSalaryy";
// import UseEs from "./useEff/UseEs";
class App extends React.Component{
  render(){
    return(
      <div>
        <center>
          <h3>
            {/* <Imagendaudio/>
          {/* <ColorSchemesExample /> */}
          {/* <h3><UseRed /></h3> */}
          {/* <h3 className="myClass"><UseRefNdEffect/></h3> */}
          {/* <h3 className="myClass"><HighOdder /></h3>   */}
          {/* <h3 className="myClass"><Count/></h3> */}
          {/* <h3 className="myClass"><DropDown /></h3> */}
          {/* <h3 className="myClass"><InputField /></h3> */}
          {/* <h3 className="myClass"><Counter /></h3> */}
          {/* <h3 className="myClass"><Checkbox /></h3> */}
          {/* <h3 className="myClass"><Test /></h3>    */}
          {/* <h3 className="myClass"><Google /></h3> */}
          {/* <h3 className="myClass"><Spread /></h3> */}
          {/* <h3 className="myClass"><Spread1 /></h3> */}
          {/* <Fb /> */}
          {/* <Gmail /> */}
          {/* <Prop /> */}
          {/* <Obj /> */}
          {/* <Classprops /> */}
          {/* <Classobj /> */} 
          {/* <Practice/> */}
          {/* <Buttons/> */}
          {/* <Hook/><br/> */}
          {/* <EvenOrNot/> */}
          {/* <Evenodd/> */}
          {/* <Student/> */}
          {/* <EmpSalaryy /> */}
          {/* <UseEs/> */}
          {/* <FatchApi /> */}
          {/* <Flexboxs/> */}
          <Home/>
          </h3>
          </center>
      </div>
    )
  }
}
export default App;