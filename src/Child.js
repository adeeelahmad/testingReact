import { useContext, useReducer, useEffect, useState } from "react";

import valueContext from "./ValueContext"




function Child() {
    let valueContex = useContext(valueContext);
    let jso = {
      "": ""
    };
    const[todo, settodo] = useState(jso);

    useEffect(() => {
      requestPets();
    }, []);

    
    async function requestPets() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1`
      );
       jso = await res.json();
       settodo(jso);
    
      console.log("data:" , todo);
    }
    
    

    
    return (
    <div>

      hello from child value {valueContex}
      <h1>hello  {todo.body}</h1>
      <button onClick =  {()=> valueContex[1](++valueContex[0])}>increment context</button>
      <button onClick =  {()=> valueContex[1](--valueContex[0])}>decrement context</button>
    



      
    </div>
    );
  }
  
  export default Child;
  