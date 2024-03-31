import React from 'react'

function LazyLoading() {
  return (
    <>
    <h1 style={{textAlign:"center",backgroundColor:'rgb(232, 91, 40)'}}>LEARNING LAZY LOADING IN REACT</h1>
   <div style={{style:"border:2px solid black",backgroundColor:"",padding:"20px 20%"}}>
   <div>
    <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Use Lazy Loading</h2>
    <ul style={{display:"flex",flexDirection:"column",gap:"20px",fontSize:"20px",fontStyle:"oblique",margin:'20px 0px',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>
        <li>Lazy Loading in React JS helps to optimize the performance of React applications. The data is only rendered when visited or scrolled it can be images, scripts, etc. Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed for the interaction lazy loading can be more helpful in applications that have high-resolution images or data that alters the loading time of the application..</li>
        <li>Lazy loading is a technique in React that allows you to load components, modules, or assets asynchronously, improving the loading time of your application. React provides a built-in React.lazy() method and Suspense component to achieve lazy loading..</li>
        {/* <li>The useMemo Hook only runs when one of its dependencies update.This can improve performance.</li> */}
    </ul>
    <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Syntax :</h2>
      <h3 style={{margin:'20px ',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}> "// Implement Lazy Loding with React.Lazy method
const MyComponent = React.lazy(() => import('./MyComponent'));"</h3>
      <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Steps to Implement Lazy Loading:</h2>
      <ul style={{display:"flex",flexDirection:"column",gap:"20px",fontSize:"20px",fontStyle:"oblique",margin:'20px 0px',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>
        <li>Recognize the component you want to Lazy Load. These are mostly Large or complex which is not necessary for all the users when the page loads.</li>
        <li>Import the `lazy()` and Suspense components from the React package</li>
        <li>Use the `lazy()` function to dynamically import the component you want to lazy load:
Note that the argument to the `lazy()` function should be a function that returns the result of the import() function. </li>
<li>Wrap the lazy-loaded component in a `Suspense` component, which will display a fallback UI while the component is being loaded:</li>
    
      </ul>
      <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Advantages :</h2>
      <ul style={{display:"flex",flexDirection:"column",gap:"20px",fontSize:"20px",fontStyle:"oblique",margin:'20px 0px',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>
        <li>Lazy loading allows you to use server resources more efficiently by loading only the resources you need. This is very important for high-traffic applications or when server resources are tight. </li>
        <li>A quicker initial load time can be achieved by using lazy loading, which minimizes the amount of code that must be downloaded and parsed when the page first loads. This can speed up your application’s first load time greatly.     </li>
      </ul>
      <h2 style={{fontStyle:"italic",textDecoration:"underline",fontWeight:"bold",backgroundColor:"rgb(226, 105, 13)",padding:"10px 20px",display:'inline',color:'white'}}>Conclusion :</h2>
      <ul style={{display:"flex",flexDirection:"column",gap:"20px",fontSize:"20px",fontStyle:"oblique",margin:'20px 0px',backgroundColor:"black",color:'white',listStyle:"inside",padding:"10px 10px"}}>
        <li>React Lazy Loading is a powerful technique that significantly improves the performance of web applications built with React. One of the key benefits of lazy loading is that it can help improve the Time to Interactive (TTI) metric, which is the time it takes for a page to become interactive and responsive. By delaying the loading of non-critical components until the page has finished loading, lazy loading reduces TTI and provides a more engaging user experience. </li>
      </ul>

   </div>
   </div>
   </>
    
  )
}

export default LazyLoading
