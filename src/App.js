import React, { useEffect, useReducer } from "react"
import Taska from "./components/Taska/Taska"
import Wrapper from "./components/Wrapper/Wrapper"
const initializer = () => JSON.parse(localStorage.getItem('items')) || initialvalue
const initialvalue = {value: '',items: [{value:'Learn-Java-Sript'}],completed: {}}
const taskaReduser = (prevState,action) =>{
  if(action.type === 'TASKA'){
    return {
      ...prevState,
      value: action.value,
      items: [
        ...prevState.items,
        {
          value: action.value,
          id: Math.random().toString()
        }
      ]
    }
  }
  if(action.type === 'CHECK'){
    return {
      ...prevState,
      completed: {
        ...prevState.completed,
        [action.index]: !prevState.completed[action.index]
      }
    }
  }
}


function App() {
  const [taska, dispatchTaska] = useReducer(taskaReduser,initialvalue,initializer)

  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(taska))
  },[taska])

  const transferTask = task =>{
    dispatchTaska({type:'TASKA',value: task})
  }

  const handleCheck = index =>{
    dispatchTaska({type: 'CHECK',index: [index]})
  }
	return <div>
      <Wrapper onTransfer={transferTask}/>
      <Taska taska={taska} handleCheck={handleCheck}/>
  </div>
}

export default App
