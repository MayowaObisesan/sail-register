import { useAccount } from 'wagmi'
import { useWriteContract } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './constant'
import { useState } from 'react';

export default function Page() {
    const account = useAccount()
    const { writeContract } = useWriteContract();
    const [name, setName] = useState(""); // class name that I want to create
    const [noOfStudent, setNumberOfStudent] = useState(0); // The number of student to create

    function handleSetClassName(event: any) {
        setName(event.target.value);
    }

    function handleSetNoOfStudents(event: any) {
        setNumberOfStudent(event.target.value);
    }

    return (
        <div>
            <h1>Create Class Page</h1>

            <div>
                <div className="max-w-sm space-y-3">
                    <div className="relative">
                        <input type="text" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name of class"
                            onChange={handleSetClassName}
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                            <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <span>The class name is: {name}</span>
                    </div>

                    <div className="relative">
                        <input type="number" className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter number of students"
                            onChange={handleSetNoOfStudents}
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                            <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                                <circle cx="16.5" cy="7.5" r=".5"></circle>
                            </svg>
                        </div>
                        <span>The number of student is: {noOfStudent}</span>
                    </div>
                </div>

                {
                    !account.address
                        ? <button
                            className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>Pls connect your wallet first</button>
                        : <button
                            className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                            onClick={() =>
                                writeContract({
                                    abi: CONTRACT_ABI,
                                    address: CONTRACT_ADDRESS,
                                    functionName: 'createClass',
                                    args: [
                                        name,
                                        noOfStudent
                                    ],
                                })
                            }
                            disabled={name === "" || noOfStudent === 0}
                        >
                            Create Class
                        </button>}
            </div>
        </div>
    )
}