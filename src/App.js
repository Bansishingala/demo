import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Country from './Container/Country';
import Countryfun from './Container/Countryfun';
import City from './Container/City';
import Cityfun from './Cityfun';
import Count from './Container/Time/Count';
import Loading from './Container/HOC/Loading';
import { useEffect } from 'react';
import Home from './Container/HOC/Home';


    const homewithloading = Loading(Home)
function App() {

    const [loading, setLoading] = useEffect(false);
    const [data, setData] = useEffect([]);

    data = [
        { id: 101, name: "ajay" },
        { id: 102, name: "amit" }
    ]
    useEffect(() => {
        setLoading(true);
        setTimeout(() => { setLoading(false); setData(data) }, 2000);
    }, [])

    return (
        <div>
            <homewithloading
                isLoading ={loading}
                data ={data}
            />

        </div>
    )
}
export default App;