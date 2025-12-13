import { ToastContainer } from 'react-toastify';

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'

const CustomerPromise = async () => {
  const CustomerData = await fetch('./customer.json');
  return CustomerData.json();
}

//console.log(CustomerPromise());

const CustomerDetails = CustomerPromise();
//console.log(CustomerDetails);


function App() {

  const [task, setTask] = useState([]);
  const [resolvedTask, setresolvedTask] = useState([]);
  //console.log(resolvedTask);
  //console.log(task);
  return (
    <>
      <div className='md:w-[1500px] mx-auto mt-20 mb-10'>
        <Navber></Navber>
        <Banner task={task} resolvedTask={resolvedTask}></Banner>
        <Suspense fallback={<span className="loading loading-bars loading-xl mt-10"></span>}>
          <Support CustomerDetails={CustomerDetails} task={task} setTask={setTask} resolvedTask={resolvedTask} setresolvedTask={setresolvedTask}></Support>
        </Suspense>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
