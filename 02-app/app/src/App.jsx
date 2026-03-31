//import './App.css'
import MyComponent from './myComponent'
import Card from './card'
import State from './State'
import UserList from './components/UserList'
import EventExp from './components/EventExp'
import Table from './components/Table'
import Accessibility from './components/Accessibility'
import LazyPages from './components/LazyPages'
import UserProvider from './Context/UserProvider'
import Component1 from './components/Component1'
import ErrorBoundary from './components/ErrorBoundary'
import BuggyCounter from './components/BuggyCounter'
import Pt from './components/Pt'
import CounterA from './components/CounterA'
import CounterB from './components/CounterB'
import withAuth from './hoc/withAuth'
import Home from './pages/Home'
import { useRef, useState } from 'react'
import Modal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store'
import Timer from './components/timer'
import Custominput from './components/CustomInput'
import FetchUsers from './components/FetchUsers'
import AxiosUsers from './components/AxiosUsers'

//Hoc mate
const ProtectedHome = withAuth(Home);
function App() {
  //const [show, setShow] = useState(false);

  //ref & forwardRef mate
  const inputRef = useRef();
  //ref
  //const focusInput = () => {

    const handleClick = () => {
      inputRef.current.focus();
  };

  //strict mode mate
  const [show, setShow] = useState(true);
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
 
  return (
    <>
      <MyComponent/>
      <div className='cards'>
        <Card title={"card 1"} des={"card 1 desc"} />
        <Card title={"card 2"} des={"card 2 desc"} />
        <Card title={"card 3"} des={"card 3 desc"} />
      </div>
      <State/>
      <UserList />
      <h1>React Event Handling</h1>
      <EventExp/>
      <Table/>
      <Accessibility/><br/>
      <LazyPages/><br/><br/><br/>

      <UserProvider>
        <Component1/>
      </UserProvider><br/><br/><br/>
      
      <h1>Error Boundary Demo</h1>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary><br/><br/><br/>

      <Pt/><br/><br/><br/>

      <h1>Reusable Hook Example</h1>
      <CounterA/>
      <CounterB/>

      <ProtectedHome/>

      {/* 
      <h1>portal example</h1>
      <button onClick={() => setShow(true)}>open model</button>
      {show && <Modal close={() => setShow(false)} />} */}

      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      {/* strictmode */}
      <button onClick={() => setShow(show)}>
        Toggle Timer
      </button>

      {show && <Timer/>}

      {/* ref and forwardref 
      <h2>simple ref example</h2>
      <input ref={inputRef} placeholder='type here...'/><br/><br/>
      <button onClick={focusInput}>Focus Input</button> */}

      {/* Forward ref example */}
      <h2>forward ref example</h2>
      <Custominput ref={inputRef} /><br/><br/>
      <button onClick={handleClick}>Focus child input</button><br/><br/>

      <h1>API Integration Example</h1>
      <FetchUsers/>
      <AxiosUsers/>
    </>
      
  );
}

export default App;
