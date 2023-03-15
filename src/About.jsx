import React from 'react'

function About() {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className='bg-black'>
            <img src={require('./images/Living Room.jpg')} className='h-full'></img>
        </div>
        <div className='flex-1 p-4'>
            <div className='border-b-2 border-b-[#f86c04]'>
                <h1 className='text-4xl font-bold '>Our Story</h1>
            </div>
            
            <br></br>
            <p className='text-md shrink min-w-min'>Maxley adalah sebuah Student Dormitory yang berdiri sejak tahun 2015, terletak di Edutown, seberang Universitas Prasetya Mulya, sudah bertahun-tahun Maxley dipercayakan oleh sebagian besar Mahasiswa Universitas Prasetya Mulya sebagai tempat tinggal mereka selama menjalani kegiatan kampus, kini sampai detik ini kami bangga melayani dan akan terus siap menjadi Student Domitory yang dapat dipercayakan dan diandalkan oleh Mahasiswa. Selain Student Domitory kami juga menerima tamu sewa seperti Karyawan/ Staff dan Daily Rent sesuai dengan ketentuan yang berlaku.</p>
            <br></br>
            <a href="https://www.tiktok.com/@maxleysuites?_t=8aRWNgJ7DDm&_r=1" target='_blank' className='btn bg-[#f86c04]'>Check out our Tiktok</a>
        </div>
        
        
    </div>
  )
}

export default About