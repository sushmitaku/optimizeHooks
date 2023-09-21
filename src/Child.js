import React from 'react';


const Child = React.memo(({ getArray,onClick }) => {
console.log("child component rander")
// Your component's rendering logic
return(
<>
{getArray.map((val,key)=><h1 key={key}>{val}</h1>)}


<button onClick={onClick}>Clickchild</button>
</>
)}


)
export default Child