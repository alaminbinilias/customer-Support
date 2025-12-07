import { ToastContainer} from 'react-toastify';

import { Suspense, useState} from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'

const CustomerPromise = async () => {
  const CustomerData = await fetch('../public/customer.json');
  return CustomerData.json();
}

//console.log(CustomerPromise());

const CustomerDetails = CustomerPromise();
//console.log(CustomerDetails);


function App() {

  const [task,setTask]=useState([]);
  console.log(task);
  return (
    <>
      <Navber></Navber>
      <Banner task={task}></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Support CustomerDetails={CustomerDetails} task={task} setTask={setTask}></Support>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
