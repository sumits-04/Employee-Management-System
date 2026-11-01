import React from 'react';

const TaskListNumbers = ({data})=> {
    return ( 
        <div className="flex mt-10 gap-5 justify-between screen">
            <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
                <h2 className='text-3xl font-medium'>{data.taskNumbers.newTask}</h2>
                <h3 className='text-xl font-semibold'>New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
                <h2 className='text-3xl font-medium'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-semibold'>Completed Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
                <h2 className='text-3xl font-medium'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-semibold'>Accepted Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
                <h2 className='text-3xl font-medium'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-semibold'>Failed Task</h3>
            </div>
           

        </div>
     );
}
export default TaskListNumbers