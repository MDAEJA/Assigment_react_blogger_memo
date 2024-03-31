import React from 'react'
import '../component/userMemoStyle.css'
function UserMemo() {
  return (
   <>
   <h1 className='heading'>LEARNING MEMO HOOK</h1>
   <div style={{style:"border:2px solid black",backgroundColor:"",padding:"20px 20%"}}>
   <div>
    <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Use useMemo</h2>
    <ul style={{display:"flex",flexDirection:"column",gap:"20px",fontSize:"20px",fontStyle:"oblique",margin:'20px 0px',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>
        <li>To fix the performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.</li>
        <li>The React useMemo Hook returns a memoized value.</li>
        <li>The useMemo Hook only runs when one of its dependencies update.This can improve performance.</li>

        <li>We can wrap the expensive function call with useMemo.</li>
        <li>The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</li>
        <li>The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</li>
        
    </ul>
    <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Syntax :</h2>
      <h3 style={{margin:'20px ',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>"useMemo(FunctionName(para), [Dependency])"</h3>
      <h2 style={{fontStyle:"italic",texttextDecoration:"underline",fontWeight:"bold",backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px",textAlign:'center'}}>End ...</h2>
   </div>
   </div>
   </>
  )
}

export default UserMemo
