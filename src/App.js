import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


function App() {

  //1// const person = {
  //   name: "Amit",
  //   age: 25
  // }
  //  for(let k in person){
  //   console.log(person[k]);
  //  }


  //2// const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //   },
  //   {
  //     name: "Piyush",
  //     age: 40,
  //   },
  // ];

  // person.map((p)=>console.log(p.name,p.age));



  //3// const person = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //     "C",
  //     "HTML"
  //   ]
  // }

  // console.log(person.name,person.age);
  // person.course.map((p)=>console.log(p));


  //4 //  const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //     course: [
  //       "C",
  //       "HTML"
  //     ]
  //   },
  //   {
  //     name: "Ajay",
  //     age: 40,
  //     course: [
  //       "Java",
  //       "JavaScript"
  //     ]
  //   }
  // ]

  // person.map((p)=>{
  //   console.log(p.name,p.age);
  //   p.course.map((p1)=> console.log(p1))
  // })



  //5 // const myObj = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //     car1: "Ford",
  //     car2: "BMW",
  //     car3: "Fiat"
  //   }
  // }

  // for (let k in myObj) {
  //   if (k === 'cars') {
  //     for (let j in myObj[k]) {
  //       console.log(myObj[k][j]);
  //     }
  //   }else{
  //     console.log(myObj[k]);
  //   }
  // }


  //6  // const data = {
  //   personal_info: {
  //     name: 'amit',
  //     age: 25,
  //     city: 'surat'
  //   },
  //   courses: ["C", "JavaScript", "React"],
  //   branches: {
  //     rwl: {
  //       admission: 50,
  //       vacant_seat: 10
  //     },
  //     rw2: {
  //       admission: 30,
  //       vacant_seat: 20
  //     },
  //     rw3: {
  //       admission: 25,
  //       vacant_seat: 25
  //     },
  //     rw4: {
  //       admission: 40,
  //       vacant_seat: 10
  //     }
  //   }
  // }

  // for (let k in data) {
  //   if (k === 'personal_info') {
  //       console.log(data[k].name,data[k].age,data[k].city);
  //   }else if(k === 'courses'){
  //       data[k].map((p)=> console.log(p))
  //   }else{
  //     for(let j in data[k]){
  //       console.log(data[k][j].admission,data[k][j].vacant_seat);
  //     }
  //   }
  // }


  data: [
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



  return(
    <div>
    <table>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>quantity</td>
        <td>price</td>
        <td>expiry</td>
        <td>status</td>
      </tr>
      {
        Data.map((d) => {
          return(
          <tr>
            <th>{d.id}</th>
            <th>{d.name}</th>
            <th>{d.quantity}</th>
            <th>{d.price}</th>
            <th>{d.expiry}</th>
            <th>{d.status}</th>
          </tr>
      )
    })
  }
    </table>
    </div>
  
  )