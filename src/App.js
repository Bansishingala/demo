import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Country from './Container/Country';
import Countryfun from './Container/Countryfun';
import City from './Container/City';

import Time from './Container/Time/Time';
import Timefun from './Container/Time/Timefun';
import Count from './Container/Time/Count';
import Cityfun from './Container/Cityfun';



function App() {
    return (
        <div>
            {/* <Count /> */}
            {/* <Timefun/> */}
            {/* <Time /> */}
            <Cityfun />
            {/* <Country /> */}
            {/* <Countryfun /> */}
            {/* <City/> */}
        </div>
    )
}
export default App;