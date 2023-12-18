import React ,{useState} from 'react';
import "./FavColor.css"
import NavBar from './NavBar';

const FavColor = () => {

    const[color,setColor] = useState(".red ");
  return (

    <>
    <NavBar/>
    <div className='container'>
    {/* <h2>Devarsh</h2> */}
        <h1>My favourite color is <br /><span className='color-name'>{color}</span>!</h1>

        <button type='button' onClick={()=>setColor("Yellow")}>Yellow</button>
        <button type='button' onClick={()=>setColor("Pink")}>Pink</button>
        <button type='button' onClick={()=>setColor("Blue")}>Blue</button>
        <button type='button' onClick={()=>setColor("Black")}>Black</button>
    </div>
    </>
  )
}

export default FavColor