import { use } from 'react';
import Card from '../Card/Card';
const Support = ({ CustomerDetails }) => {
    const AllCustomers = use(CustomerDetails);
    //console.log(AllCustomers);
    return (
        <div className='w-full px-2 md:w-[1500px] mx-auto mt-20 mb-10 root'>
            <p className='font-semibold text-2xl mb-4'>Customer Tickets</p>
            {/* <Card></Card> */}
            <div className='grid grid-cols-12 gap-4'>
                <div className=' col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {
                        AllCustomers.map(Customer => <Card></Card>)
                    }
                </div>
                <div className='col-span-2'>
                    <div className='border-2 border-amber-950'>
                        <p>Hello</p>
                    </div>
                    <div className=' border-2 border-amber-600'>
                        <p>Wellcome</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;