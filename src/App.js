// import logo from './logo .svg';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LazyLoading from './component/LazyLoading';
import UserCallback from './component/UserCallback';
import UserMemo from './component/UserMemo';

function App() {
  return (
    <>
    <div style={{padding:'10px 20px',backgroundColor:'rgb(13, 141, 226)',color:'white',fontStyle:'italic',textDecoration:"none"}}>
     <ul style={{display:'flex',listStyle:'none',justifyContent:'space-evenly',fontWeight:'bold',textDecoration:'none'}}>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}><li>Use-MEMO</li></Link>
      <Link to={'/callback'} style={{textDecoration:'none',color:'white'}}><li>USE-CALLBACK</li></Link>
      <Link to={'/lazyloading'} style={{textDecoration:'none',color:'white'}}><li>LAZY-LOADING</li></Link>
      
      
      
     </ul>
    </div>
    <Routes>
      <Route path='/' element={<UserMemo></UserMemo>}></Route>
      <Route path='/callback' element={<UserCallback></UserCallback>}></Route>
      <Route path='/lazyloading' element={<LazyLoading></LazyLoading>}></Route>
    </Routes>
    {/* <UserMemo></UserMemo> */}
    {/* <UserCallback></UserCallback> */}
    {/* <LazyLoading></LazyLoading> */}
    </>
  );
}

export default App;
