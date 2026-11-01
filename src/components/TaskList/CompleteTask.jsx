import React from 'react';  

const CompleteTask= ({data})=> {
    return ( 
        <div className='h-full w-[300px] flex-shrink-0 bg-green-400 p-5 rounded-xl'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 py-1 text-sm px-3 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>
                    {data.taskDescription}
                </p>
                <div className='mt-4'>
                    <button className='w-full bg-green-500 py-1 px-2'>Complete</button>
                </div>
            </div>
     );
}

export default CompleteTask;