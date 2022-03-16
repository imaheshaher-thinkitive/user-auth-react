import React from 'react'
import { useDispatch } from 'react-redux'
import { IncrementAction } from '../../redux/actions/countAction'
import { ActionType } from '../../redux/constant/actionType'

function CounterComponent() {
    const dispatch = useDispatch()
  return (
    <div>
        Increment component 
        <button className='counter-btn' onClick={()=>dispatch(IncrementAction({type:ActionType.INCREMENT}))}>+</button>
    </div>
  )
}

export default CounterComponent