import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';


function App() {
  const person = {
    name: "Amit",
    age: 25
  }
   for(let k in person){
    console.log(person[k]);
   }


  return (
    <Demo />
  );
}

export default App;
