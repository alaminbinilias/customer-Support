import React from 'react';
import { toast } from 'react-toastify';

const StatusSection = ({tsk,resolveTask}) => {
    //console.log(tsk);
    const ResolveHandle=(id)=>{
        toast("Resolve Task")
        resolveTask(id);
    }


    return (
        <div>
            <div className="card-body bg-white mb-2">
                <h2 className="card-title text-[1.2rem] mb-2">{tsk.title}</h2>
                <div className="justify-end card-actions w-full">
                    <button onClick={()=>ResolveHandle(tsk.id)} className="btn bg-[#02a63b] text-white w-full">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default StatusSection;