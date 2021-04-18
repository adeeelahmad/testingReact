import { useContext, useReducer } from "react";

import valueContext from "./ValueContext"
import ValueReducer from "./ValueReducer"


function GrandChild() {
    let valueContex = useContext(valueContext);
    const [count, dispatch] = useReducer(ValueReducer, 0)
    
    
    return (
    <div>
      hello from Grandchild value {valueContex}
          
      

  
      GrandChild: {count}
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
    
  )
    
    </div>
    );
  }
  
  export default GrandChild;
  