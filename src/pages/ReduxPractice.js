import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementAction } from "../redux/actions/countAction";
import { ActionType } from "../redux/constant/actionType";

function ReduxPractice() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.countReducer);
  const onClickCount = (data) => {
    dispatch(IncrementAction(data))
    
  }

  return (
    <div>
        <h3 className="redux-name">REDUX</h3>
    <div className="redux-center">
     <div >
          <button className="counter-btn" value={"Increment"} onClick={()=>onClickCount({type:ActionType.INCREMENT})}>
        Increment
      </button>{" "}
   < h3 style={{textAlign:"center"}}>  {value} </h3>
      <button  className="counter-btn" value={"Decrement"} onClick={() => onClickCount({type:ActionType.DECREMENT})}>Decrement</button>
      </div>
    </div>
    </div>
  );
}

export default ReduxPractice;
