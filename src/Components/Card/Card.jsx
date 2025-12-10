import { toast } from 'react-toastify';
import calander from '../../assets/ri_calendar-line.png'
const Card = ({Customer,task,setTask}) => {
    //console.log(Customer);
    //setallTask([...allTask,Customer]);
    const ClickHandle=(Cus)=>{
        // alert("Task Selected");
        toast("Task Selected");
        setTask([...task,Cus]);
    }
    return (
        <div>
            <div onClick={()=>{ClickHandle(Customer)}} className='bg-white shadow-sm p-3 cursor-pointer text-sm'>
                <div className='flex gap-3 justify-between'>
                    <div>
                        <p className='font-medium text-[1.2rem]'>{Customer.title}</p>
                    </div>
                    <div>
                        <div className={`flex  text-nowrap items-center gap-2 ${Customer.status==="Open"?'bg-[#baf7cf]' :'bg-[#f7f2ba]'} ${Customer.status==='In Progress'&&"text-gray-500"} px-3 py-1 rounded-2xl`}>
                            <div className={`${Customer.status==="Open"? 'bg-[#02a63b]':'bg-[#ffba0d]'} h-4 w-4 rounded-4xl flex items-center`}>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-xl -mt-1'>{Customer.status}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-1 text-gray-500'>
                    <p className='text-[1.1rem]'>{Customer.description}</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <div className=' flex '>
                        <div>
                            <p className='text-gray-400 mr-2 font-semibold'>#{Customer.id}</p>
                        </div>
                        <div>
                            <p className={`${Customer.priority==="Low priority"&& "text-[#02a63b]"} ${Customer.priority==="High priority"&& "text-red-600"} ${Customer.priority==="Medium priority"&& "text-[#facb55]"} font-medium`}>{Customer.priority}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>
                            <p className='text-gray-400'>{Customer.customer}</p>
                        </div>
                        <div className='flex'>
                            <img src={calander} alt="" />
                            <p className='ml-2 text-gray-400'>{Customer.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;