import React from "react"
function Counter(){
    // state
    var [c,setc]=React.useState(0);

    // action
    function inc(){
    //   setc(c+1);
    setc((currentval)=>{
        return currentval+1;
    })
      }
     function dec(){
    //  setc(c-1)
    setc((currentval)=>{
        return currentval-1;
    })  
      }
      function res(){
    //     setc(0);
    setc((currentval)=>{
        return 0;
    })
     }

    //ui
    return(
        <div>
            <h3>Counter:{c}</h3>
            <button className="btn bg-success-subtle border-success" onClick={()=>{inc()}}>Increment</button>
            <button className="btn bg-danger-subtle border-danger ms-3"onClick={()=>{dec()}}>Decrement</button>
            <button className="btn bg-info-subtle border-info ms-3 "onClick={()=>{res()}}>Reset</button>
        </div>
    )
}
export default Counter