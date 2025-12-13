import { use, useState } from 'react';
import Card from '../Card/Card';
import StatusSection from '../StatusSection/StatusSection';
import ResolveSection from '../ResolveSection/ResolveSection';
import taskImg from '../../assets/tsk.png'


const Support = ({ CustomerDetails, task, setTask, resolvedTask, setresolvedTask }) => {
    const AllCustomers = use(CustomerDetails);
    //console.log(AllCustomers[0].id);
    //console.log(task);
    const [flterDataSet, setflterDataSet] = useState(AllCustomers);
    //console.log(flterDataSet);
    const resolveTask = (p) => {
        //console.log(p);
        const flterData = task.find(tsk => tsk.id === p);
        //console.log(flterData);
        setresolvedTask([...resolvedTask, flterData]);
        const removeStatusCard = task.filter(Tsk => Tsk.id != p);
        //console.log(removeStatusCard);
        setTask(removeStatusCard);
        //console.log(FilterDataSet);
        // flterDataset.map(Cus=><Card></Card>);
        //AllCustomers=FilterDataSet;
        const removeSpecificDataSet = flterDataSet.filter(singleTask => singleTask.id !== p);
        //console.log(removeSpecificDataSet);
        setflterDataSet(removeSpecificDataSet);
    }
    return (
        <div className='grid grid-cols-1 md:w-[1500px] mx-auto mt-20 mb-10 root'>

            <div className='px-4 w-full grid grid-cols-12 gap-4 items-center justify-between'>
                <p className='font-semibold text-2xl mb-4 col-span-9'>Customer Tickets</p>
                <p className=' hidden md:block font-semibold text-2xl mb-4 col-span-3'>Task Status</p>





                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <img onClick={() => document.getElementById('my_modal_2').showModal()} className=' mb-3 ml-20 block md:hidden' src={taskImg} alt="" />
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">

                        <h3 className="font-bold text-lg">Task Status</h3>


                        <div className='overflow-hidden overflow-y-auto'>
                            <div className='overflow-y-auto'>

                                <div className="card w-full card-sm shadow-sm mt-2">
                                    {
                                        task.map(tsk => <StatusSection tsk={tsk} resolveTask={resolveTask}></StatusSection>)
                                    }
                                </div>


                            </div>
                            <div className='overflow-y-auto'>

                                <p className='mt-3 mb-3 font-bold text-lg'>Resolved Task</p>

                                <div className='border-amber-950 h-92 overflow-y-auto'>

                                    <div className="card w-full card-sm p-0 shadow-sm mb-2 mt-2">
                                        {
                                            resolvedTask.map(resolveTask => <ResolveSection resolveTask={resolveTask}></ResolveSection>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>














                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>




            </div>
            {/* <Card></Card> */}
            <div className='grid md:grid-cols-12 gap-3 text-sm'>
                <div className='grid grid-cols-1 px-2 md:grid-cols-2 col-span-9 gap-2'>
                    {
                        flterDataSet.map(Customer => <Card Customer={Customer} task={task} setTask={setTask}></Card>,)
                    }
                </div>
                <div className='hidden md:block h-230 overflow-hidden overflow-y-auto col-span-3'>
                    <div className='overflow-y-auto'>

                        <div className="card w-full card-sm shadow-sm mt-2">
                            {
                                task.map(tsk => <StatusSection tsk={tsk} resolveTask={resolveTask}></StatusSection>)
                            }
                        </div>


                    </div>
                    <div className='overflow-y-auto'>

                        <p className='font-semibold text-xl mt-3 mb-3'>Resolved Task</p>

                        <div className='border-amber-950 h-92 overflow-y-auto'>

                            <div className="card w-full card-sm p-0 shadow-sm mb-2 mt-2">
                                {
                                    resolvedTask.map(resolveTask => <ResolveSection resolveTask={resolveTask}></ResolveSection>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;