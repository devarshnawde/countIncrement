import react from "react";
import {useState} from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";
import FavColor from "./FavColor";

function Container ()
{
    const[count,setCount] = useState(0);
    return (

        <>
        
        <div className="container">
                <h1>You clicked {count} times !</h1>

                <button type="button"  onClick={()=>setCount(count+1)}>Click me!</button>
                <button type="button"  onClick={()=>setCount(0)}>Reset</button>

               
        </div>

        <FavColor/>

        </>
    );
}

export default Container;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FavColor/>);