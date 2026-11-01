import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask= ()=> {
    const [userData, setUserData]= useContext(AuthContext);
    return ( 
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
            <div className="bg-red-400 py-2 mb-2 px-4 flex justify-between rounded">
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h3 className='text-lg font-medium w-1/5'>Failed</h3>
            </div>

            <div className=''>
            {userData.map(function(elem, idx){
                return <div key={idx} className="bg-transparent border-2 border-emerald-50    0 py-2 mb-2 px-4 flex justify-between rounded">
                <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium text-blue-400 w-1/5'>{elem.taskNumbers.newTask}</h3>
                <h5 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskNumbers.active}</h5>
                <h5 className='text-lg font-medium text-white w-1/5'>{elem.taskNumbers.completed}</h5>
                <h3 className='text-lg font-medium text-red-600 w-1/5'>{elem.taskNumbers.failed}</h3>
            </div>
            })}
            </div>
            </div>
     );
}

export default AllTask;