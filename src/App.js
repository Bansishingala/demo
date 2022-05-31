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


  return (
    <Demo />
  );
}


export default App;
