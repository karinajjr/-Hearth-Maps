import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sss from '../../public/icon/ProMaxTwo.png'
import Tursik from '../../public/icon/Tursik.png'
import Wet from '../../public/icon/Wet.png'
import Toilet from '../../public/icon/Toilet.png'
import Med from '../../public/icon/Med.png'
import Card from '../../public/icon/Card.png'
import Cash from '../../public/icon/Cash.png'

function Period() {
    const navigate = useNavigate();
    return (
        <>
            <div className='px-7 '>
                <div className="flex justify-between py-3">
                    <i className="bi bi-arrow-left text-2xl" onClick={() => navigate('/')}></i>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl">Period kit: delivery</h1>
                    </div>
                    <i className="bi bi-list text-2xl"></i>
                </div>

                <div className='flex mt-10 gap-5'>
                    <img src={Sss} className='w-20' />
                    <div>
                        <h1>Period pads</h1>
                        <p className='text-sm'>Size: medium</p>
                        <p className='text-sm'>Manufacturer: Kotex</p>
                        <p className='text-sm'>Number: 2</p>
                    </div>
                </div>

                <hr className='text-gray-300 mt-8' />

                <div className='flex gap-4 mt-10'>
                    <div>
                        <img src={Tursik} />
                        <p>siurgiugv</p>
                    </div>
                    <div>
                        <img src={Wet} />
                        <p>siurgiugv</p>
                    </div>
                    <div>
                        <img src={Toilet} />
                        <p>siurgiugv</p>
                    </div>
                    <div>
                        <img src={Med} />
                        <p>siurgiugv</p>
                    </div>
                </div>

                <hr className='text-gray-300 mt-10' />

                <div className='mt-5'>
                    <button className='py-1 border border-gray-300  rounded-2xl w-full '>
                        <div>
                            <h1>E district, entrance 7</h1>
                            <p className='text-xs'>Toshkent</p>
                        </div>
                    </button>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-8'>
                    <div>
                        <p>Entrance</p>
                        <input class="border border-gray-400 rounded-sm p-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-45" type="text" placeholder="XX" />
                    </div>
                    <div>
                        <p>Door phone</p>
                        <input class="border border-gray-400 rounded-sm p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-45" type="text" placeholder="XX" />
                    </div>
                    <div>
                        <p>Apt/Office</p>
                        <input class="border border-gray-400 rounded-sm p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-45" type="text" placeholder="XX" />
                    </div>
                    <div>
                        <p>Floor</p>
                        <input class="border border-gray-400 rounded-sm p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-45" type="text" placeholder="XX" />
                    </div>
                    <div>
                        <p>Phone number</p>
                        <input class="border border-gray-400 rounded-sm p-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-45" type="text" placeholder="+998 (XX) XXX-XX-XX" />
                    </div>
                </div>


                <hr className='text-gray-300 mt-10' />

                <div className=' flex gap-4 mt-10'>
                    <div className='bg-gray-200  py-2.5 px-4 rounded-xl  '>
                        <img src={Card} className='w-[30px]' alt="" />
                        <p className='text-xs mt-3'> Add a card</p>
                    </div>
                    <div className='bg-gray-200  py-2.5 px-4 rounded-xl'>
                        <img src={Cash} className='w-[30px]' />
                        <p className='text-xs mt-3 mr-8 '>Cash</p>
                    </div>
                </div>


                <div className="fixed border-gray-400 bottom-0 inset-x-0 flex flex-col items-center bg-white rounded-2xl border-t-1 py-3">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-lg w-[90%] max-w-sm hover:bg-blue-600 transition"  >
                        перейти
                    </button>

                </div>


            </div>
        </>
    )
}

export default Period