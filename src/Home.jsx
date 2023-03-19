import React from 'react'

function Home() {
  return (
    <div className='flex flex-col'>
        <div className="home-carousel carousel w-full">
            <div id="home" className="carousel-item relative w-full">
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                   
                    <a href="#promotion2" className="btn btn-circle btn-ghost">❮</a> 
                    
                    <div className='flex flex-col absolute items-center w-full h-full justify-center -z-50'>
                        <h1 className='text-4xl text-center md:text-6xl font-bold'>#livingwithmaxley</h1>
                        <h1 className='text-3xl text-center'>Hotel & Lodging</h1>
                        <div className='flex flex-row mt-4 flex-wrap'>
                            <button className="btn btn-outline">About Us</button>
                            <button className="btn btn-ghost">Contact Us</button>
                        </div>
                        
                    </div>                   
                    
                    
                    <a href="#promotion1" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div> 
            <div id="promotion1" className="carousel-item relative w-full flex flex-col">
                <h1 className='text-4xl text-center font-bold md:text-6xl z-50'>Group Package Promo!
                    <br></br>
                    Invite your friends to living at Maxley!
                </h1>
                <video autoPlay muted loop className='w-full absolute w-full h-full'>
                    <source src={require("./images/groupPromo.MP4")} type="video/mp4" />
                </video>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    
                        
                    <a href="#home" className="btn btn-circle btn-ghost">❮</a> 
                    
                    
                    
                    <a href="#promotion2" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div> 
            <div id="promotion2" className="carousel-item relative w-full flex flex-col align-center">
                <h1 className='text-4xl text-center font-bold w-full md:text-6xl z-50'>Get FREE Merchandise SUGA BTS & Doorprize Lightstick BTS for ARMY!!!</h1>
                <video autoPlay muted loop className='w-full absolute w-full h-full'>
                    <source src={require("./images/1678638516900729.MP4")} type="video/mp4" />
                </video>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#promotion1" className="btn btn-circle btn-ghost">❮</a> 
                    <div className='flex flex-col absolute w-full h-full -z-50 justify-center items-center '>
                        
                    </div>
                    
                    
                    <a href="#home" className="btn btn-circle btn-ghost">❯</a>
                </div>
            </div> 
        </div>
        <div>
            <div className='section about-section grid md:grid-cols-1 md:h-screen lg:grid-cols-2 w-full'>
                <div className='relative text-center justify-center items-center flex flex-col flex-1 bg-cover bg-[url("../images/Gym.jpg")] '>
                    <div className='min-w-full h-full bg-[#f86c04] opacity-30 absolute'></div>
                    <a className='text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer'>Services</a>
                    <br></br>
                    
                </div>
                <div className='relative text-center flex-1 flex flex-col justify-center items-center p-6  bg-cover bg-[url("../images/Billiard.jpg")]'>
                    <div className='min-w-full h-full bg-[#f86c04] opacity-30 absolute'></div>
                    <a className='text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer'>About</a>
                    <br></br>
                    
                </div>
            </div>
        </div>
        <div>
            <div className='section news-section text-center flex flex-col justify-center items-center '>
                <h1 className='text-4xl font-bold text-white'>You can find the latest information or events about Maxley here!</h1>
                <br></br>
                <button className='btn bg-transparent border-white w-32 text-white hover:text-white hover:bg-[#f86c0477]'>Go to News</button>
            </div>
        </div>
        <div>
            <div className='section about-section flex flex-wrap'>
                <div className='basis-1/3 bg-gray-800 flex-1 contact-panel'>
                    
                </div>
                <div className='basis-2/3 flex-1 p-3'>
                    <h1 className='text-6xl font-bold underline decoration-[#f86c04]'>Contact Us</h1>
                    <br></br>
                    <p className='text-xl'>Email: <a href='mailto:maxleysuites@gmail.com' className='hover:underline'>maxleysuites@gmail.com</a></p>
                    <p className='text-xl'>BSD: <a href='https://wa.me/+6288225924227' className='hover:underline'>+6288225924227</a></p>
                    <p className='text-xl'>Lippo: <a href='https://wa.me/+6285852293500' className='hover:underline'>+6285852293500</a></p>
                    <p className='text-xl'>Customer Service and Feedback: <a href='https://wa.me/+6281227762299' className='hover:underline'>+6281227762299</a></p>
                    <p className='text-xl font-bold'>Operational Hours: 09.00 - 17.00 WIB</p>
                    <br></br>
                    <a className='btn btn-primary' href="https://goo.gl/maps/SAxM51p66Yasbj2L9" style={{'border':0}}>Check our location</a>
                    <br></br>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home