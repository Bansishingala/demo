import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Country from './Container/Country';
import Countryfun from './Container/Countryfun';
import City from './Container/City';
import Cityfun from './Container/Cityfun';
import  {Component, useEffect ,useState} from 'react' ;
import  Loading from './Container/HOC/Loading';
import  Home from './Container/HOC/Home';

const Homewithloading = Loading(Home);

function App() {

    const  [loading , setLoading] = useState(false)
    const  [data , setData] = useState([])

    const Orgdata= [
        {id:101 ,name:"amit"},
        {id:102 , name:"ajay"}
    ]
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {setLoading(false) ; setData(Orgdata)}, 2000);
    }, [])
    return (
        <div>
           <Homewithloading 
                isloading={loading}
                data={data}
           />
        </div>
    )
}
export default App;