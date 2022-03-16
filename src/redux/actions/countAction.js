import { ActionType } from "../constant/actionType"


export const IncrementAction = ({type}) =>{ 
    console.log("type",type)
    return {
        type:type
    }
    // console.log(dispatch)
    // try {

    //     dispatch({
    //         type:ActionType.INCREMENT
    //     })
       
    // } catch(err) {
    //     console.log(err)

    // }
}