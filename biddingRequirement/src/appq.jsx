import {stricMode} from 'react';
import { useState } from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import App from './App';

function square(){
    const [value,setValue]=useState(null);
}
function handleClick(){
    setValue('X');
}

return(
    <button 
    className='square' 
    onClick={handleClick}>
        {value}</button>
)
function Square({value}){
    return <button className='square'>{value}</button>;
}

export default function Board(){
    return (
   <>
   <div className='board-row'>
    <Square value={Squares[0]}/>
    <Square value={Squares[1]}/>
    <Square value={Squares[2]}/>
    </div><div className='board-row'>
    <Square value={Squares[3]}/>
    <Square value={Squares[4]}/>
    <Square value={Squares[5]}/>
    </div><div className='board-row'>
    <Square value={Squares[6]}/>
    <Square value={Squares[7]}/>
    <Square value={Squares[8]}/>
    </div>
    </>
    );
}

function Square ({ value}){
    function handleClick(){
        console.log('clicked!');
    }
}
export default function Board(){
    const [squares,setSquare]=useState(Array(9).fill(null));
}