import { use } from 'react';
import Card from '../Card/Card';
const Support = ({ CustomerDetails }) => {
    const AllCustomers = use(CustomerDetails);
    //console.log(AllCustomers);
    return (
        <div className='w-full grid grid-cols-1 md:w-[1500px] mx-auto mt-20 mb-10 root'>
            {/* <p className='font-semibold text-2xl mb-4'>Customer Tickets</p> */}
            {/* <Card></Card> */}
            <div className='grid md:grid-cols-12 gap-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 col-span-9 gap-2'>
                    {
                        AllCustomers.map(Customer => <Card Customer={Customer}></Card>)
                    }
                </div>
                <div className='hidden md:block h-230 overflow-hidden overflow-y-auto col-span-3'>
                    <div className='overflow-y-auto'>

                        <div className="card w-full bg-base-100 card-sm shadow-sm mb-2 mt-2">
                            <div className="card-body">
                                <h2 className="card-title text-[1.2rem] mb-1">Payment Failed - Card Declined</h2>
                                <div className="justify-end card-actions w-full">
                                    <button className="btn bg-[#02a63b] text-white w-full">Complete</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='overflow-y-auto'>

                        <p className='font-semibold text-xl mt-3 mb-3'>Resolved Task</p>

                        <div className='border-amber-950 h-92 overflow-y-auto'>

                        <div className="card w-full bg-base-100 card-sm p-0 shadow-sm mb-2 mt-2">
                            <div className="bg-[#e0e8ff] p-1">
                                <h2 className="font-semibold text-[1.2rem] text-center mb-1">Payment Failed - Card Declined</h2>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;