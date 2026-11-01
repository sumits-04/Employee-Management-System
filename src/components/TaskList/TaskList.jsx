import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList= ({data})=> {
    
    return ( 
        <div id='taskList' className='h-[340px] flex items-center overflow-x-auto justify-start gap-5 py-5 w-full mt-10'>
            {
                data.tasks.map((el, idx)=>{
                    if(el.active){
                        return <AcceptTask key={idx} data={el}/>
                    }
                    if(el.newTask){
                        return <NewTask key={idx} data={el}/>
                    }
                    if(el.complete){
                        return <CompleteTask key={idx} data={el}/>
                    }
                    if(el.failed){
                        return <FailedTask key={idx} data={el}/>
                    }

                })
            }
        </div>
     )
}

export default TaskList;