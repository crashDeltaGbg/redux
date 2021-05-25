import './App.css';
import { useDispatch } from 'react-redux';

import ViewCounter from './components/ViewCounter';
import increment from './actions/increment';
import decrement from './actions/decrement';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
 
function App() {
	const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state
  });

	function handlePlus() {
    dispatch(increment(1))
  }

  function handleMinus() {
    dispatch(decrement(1))
  }

  useEffect (() =>{
    const minus = document.getElementById('minus');
    minus.disabled = counter < 1 ? true : false;
  }, [counter]);

	return (
  <div className="App">
    <button id="minus" onClick={handleMinus}>Minska med 1</button>
    <button id="plus" onClick={handlePlus}>Öka med 1</button>
    <ViewCounter/>
  </div>
  )
}

export default App;
