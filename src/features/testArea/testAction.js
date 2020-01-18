import { INCREMENTCOUNTER, DECREMENTCOUNTER } from "./testConstant";
export const incrementCounter=()=>{
    return {
        type: INCREMENTCOUNTER
    }
}
export const decrementCounter=()=>{
    return {
        type: DECREMENTCOUNTER
    }
}
