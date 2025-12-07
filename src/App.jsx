
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navber from './Components/Navber/Navber'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'

const CustomerPromise= async()=>{
  const CustomerData= await fetch('../public/customer.json');
  return CustomerData.json();
}

//console.log(CustomerPromise());

const CustomerDetails=CustomerPromise();
//console.log(CustomerDetails);


function App() {
  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Support CustomerDetails={CustomerDetails}></Support>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
