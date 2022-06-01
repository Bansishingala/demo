import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function App() {

  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  let data1=
[
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let fdata = data.filter ((d) =>d.status === true && d.expiry >= 2022 )
  console.log(fdata);
  let fdata1 = data1.filter ((d1) =>d1.age >= 21 && d1.status === true )
  console.log(fdata1);

  let ans=  fdata.reduce((acc,d,i)=>acc + d.price ,0)
  console.log(ans);
  let ans1 = fdata1.reduce ((acc,d1,i)=> acc + d1.salary ,0)
  console.log(ans1); 

  return (
    <div>
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Expiry</td>
          <td>Status</td>
        </tr>
        {
          data.map((d) => {
            let {id,name,quantity,price,expiry,status} = d 
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
              </tr>
            )
          })
        }
      </table>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>age</td>
          <td>salary</td>
          <td>bonus</td>
          <td>Status</td> 
        </tr>
        {
          data1.map((d1) => {
            let {name,age,salary,bonus,status} = d1 
            return (
              <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{status.toString()}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );

  

}


export default App;