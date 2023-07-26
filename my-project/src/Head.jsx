import Header from './Header.jsx'
function Head() {
    return(
        <div className='md:px-[5rem] px-[2rem] pt-[2rem] bg-grad bg-cover'>
            <Header />
            <div className='flex flex-col sm:flex-row justify-between items-center sm:py-[5rem] py-[3rem] gap-4'>
                <div>
                    <h3 className='text-white font-Poppins font-bold lg:text-[3.5rem] text-[2.1rem] drop-shadow-lg'>Hello, I am Paddy Technology.</h3>
                    <p className='font-Overpass font-semibold text-primary-200 mt-5'>We are a website design and development company in China, <br />If you want to learn about website construction in China, then you are in the right place.</p>
                    <a href="/"><button className='bg-primary-200 font-Doppio sm:text-[1.5rem] text-[1rem] text-white px-8 py-2 rounded-[30px] mt-10 hover:opacity-80'>Get Started</button></a>
                </div>

                <div className='sm:w-[70%] w-full'>
                    <img src="/src/images/backgroundImg.png" alt=""  className='w-[100%]'/>
                </div>
            </div>
        </div>
    )
}

export default Head