//import logo from './logo.svg';
import './App.css';
//import Apple from './components/message'
//import Fruits from './components/nested'
import Statemangement from './components/usestate';
import ExampleComponent from './components/usestateexample';
import Resize from './components/windowresize';
import './sample.css'
import Firstcomponent from './properties/Firstcomponent';
import Secondcomponent from './properties/Secondcomponent';
import Thirdcomponent from './properties/Thirdcomponent';
import Fourthcomponent from './properties/Fourthcomponent';
import Exampleuseeffect from './components/useeffectexample';
import Clickevent from './components/clickevents';

const user={
  name:"keerthan",
  area:"Hyderabad",
  pincode:500072,
  education:"Btech",
}



function App() {
  return (
    <>
  {/* <Apple></Apple>
  <Fruits></Fruits>
  <Secondcomponent area={user.area} pincode={user.pincode}/>
  <p>this is a sample css which was writen in external file and imported  </p> 
  <Firstcomponent name={user.name}/>
  <Secondcomponent name={`${user.area} ${user.pincode}`}/> {/* we can pass multiple values 
  <Thirdcomponent userName= {user}/>
  <Fourthcomponent name="Raju"/>
    <Statemangement></Statemangement>
   <ExampleComponent></ExampleComponent>
    <Exampleuseeffect></Exampleuseeffect>
     <Clickevent></Clickevent>
   */}
   <Resize></Resize>
   
  </>

  );
}

export default App;
