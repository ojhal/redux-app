import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNUMBER } from './actions/index';
// import Button from "@material-ui/core/Button"
 const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber )
  const dispatch = useDispatch()
  return (
    <>
   <div className="container">

<h1>Increment/Decrement counter</h1>
<h4>Using React and Redux</h4>
<div className="quantity">
<button className="quantity-minus" title="Decrement" onClick={()=>dispatch(decNUMBER())}><span>-</span> </button>
<input name="quantity" type='text' className="quantity__input" value={myState}/>
<button className="quantity-plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span> </button>
</div>
   </div>
    </>
  )
}

export default App;
