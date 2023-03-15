import React from 'react'

function Rooms() {
  return (
    <div>
        <h1 className='text-4xl underline decoration-[#f86c04] font-bold text-center'>Rooms</h1>
        <div className='grid grid-rows-3 p-4'>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='lg:w-1/3 md:w-full'><img src={require('./images/Single Bed.jpeg')} alt="single bed"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl underline decoration-[#f86c04]">Single Bed</h2>
                        <p>
                            <p className='text-lg font-bold'>Description:</p>
                            <ul className='text-lg'>
                                <li>Room size 6x3</li>
                                <li>1 Pillow</li>
                                <li>Bed (160 x 200 cm)</li>
                                <li>Wardrobe</li>
                                <li>Rubbish Bin</li>
                                <li>Air Conditioner</li>
                                <li>Bathroom</li>
                                <li>Water Heater</li>
                                <li>Balcony</li>
                                <li>98 rooms (BSD 1)</li>
                                <li>49 rooms (BSD 2)</li>
                            </ul>
                        
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='lg:w-1/3 md:w-full'><img src={require('./images/IMG_4634.JPG')} alt="double bed"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl underline decoration-[#f86c04]">Double Bed</h2>
                        <p>
                            <p className='text-lg font-bold'>Description:</p>
                            <ul className='text-lg'>
                                <li>Room Size 7x3</li>
                                <li>Bed (180 x 200 cm)</li>
                                <li>1 Pillow</li>
                                <li>Bed (160 x 200 cm)</li>
                                <li>Wardrobe</li>
                                <li>Rubbish Bin</li>
                                <li>Air Conditioner</li>
                                <li>Bathroom</li>
                                <li>Water Heater</li>
                                <li>BalconyRoom Size 7x3</li>
                                <li>21 rooms (BSD 1)</li>
                                <li> 13 rooms (BSD 2)</li>
                            </ul>
   
                        </p>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='lg:w-1/3 md:w-full'><img src={require('./images/DSC_5818-HDR.jpeg')} alt="double bed"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl underline decoration-[#f86c04]">Suite Room</h2>
                        <p>
                            <p className='text-lg font-bold'>Description:</p>
                            <ul className='text-lg'>
                                <li>Room Size 6x3</li>
                                <li>2 Bed (120 x 200 cm)</li>
                                <li>2 Pillow</li>
                                <li>Bed (160 x 200 cm)</li>
                                <li>Table + Chair</li>
                                <li>Wardrobe</li>
                                <li>Rubbish Bin</li>
                                <li>Air Conditioner</li>
                                <li>Bathroom</li>
                                <li>Water Heater</li>
                                <li>Balcony</li>
                                <li>8 rooms available (BSD 1)</li>
                                <li>11 rooms available (BSD 2)</li>

                           
                            
                            
                            
                           
                            
                            
                            
                            
                            
                            
                            
                            
                            

                            </ul>
   
                        </p>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Rooms