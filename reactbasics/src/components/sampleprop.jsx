function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;   // using props to display name
  }
  
  function App() {
    return (
      <div>
        <Greeting name="Keerthan" />    // Passing props to Greeting component
        <Greeting name="John" />
      </div>
    );
  }
export default Greeting