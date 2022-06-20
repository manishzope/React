import logo from './logo.svg';
import './App.css';
// import Welcome, { MyComp, Greetings } from './CompEx';
// import CompStyle from './CompStyle';
import Hello, {Greet} from './PropsState/Greet';
import {CheckboxComp} from './PropsState/CheckboxComp';
import MessageComp from './PropsState/MessageComp';
import MyHelloWorld from './StyledComp/StyledEx';
import MyLayout from './Layout/MyLayout';

function App() {
  return (
    <div>
      {/* <Greet /> */}
      {/* <Greet pname="Manish" /> */}
      {/* <Greet pname="Lavannya" city="Pune">Welcome to Pune</Greet> */}
      {/* <Hello pname="Lalit"></Hello> */}
      {/* <Hello></Hello> */}
      {/* <CheckboxComp /> */}
      {/* <MessageComp /> */}
      {/* <MyHelloWorld /> */}
      <MyLayout />
    </div>
  );
}

export default App;
