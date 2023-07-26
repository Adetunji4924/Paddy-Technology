import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import ContactUs from '../Contact-Us.jsx'

function WebsiteBuilding() {
    return(
        <div>
            <div className='md:px-[5rem] px-[1rem] pt-[2rem] bg-website bg-cover'>
            <Header />
                <div className='md:pt-[5rem] pt-[2rem] flex flex-col items-center md:items-start'>
                    <h2 className='text-white font-Doppio font-bold lg:text-[4rem] text-[2.1rem] drop-shadow-lg'>Website building</h2>
                    <p className='text-white font-Doppio md:text-[1.2rem] text-[1rem] md:max-w-[60%] max-w-[100%] md:text-start text-center md:pt-[2rem] pt-[1rem] md:pb-[15rem] pb-[2rem]'>If your business organization wants to enter the Chinese market, you will need a website that is specifically aimed at your Chinese audience.</p>
                </div>
            </div>

            <div className='md:px-[5rem] px-[1rem] py-[5rem] items-center flex flex-col'>
                <h2 className='text-black font-Kodchasan lg:text-[2.5rem] text-[1.3rem] text-center uppercase'>Paddy builds a website suitable for the Chinese market for you</h2>
                <p className='text-[#737171] font-Overpass mt-5 md:max-w-[70%] max-w-[100%] text-center'>Create a Chinese website design to let Chinese customers know the advantages of your product or service. Following your brand guidelines, we create a site that fits the local market while setting you apart from the competition</p>
                <img src="../src/images/Group 1000004430.png" alt="" className='mt-[3rem] max-w-[100%]'/>
            </div>

            <div className='md:px-[5rem] px-[1rem] py-[5rem] items-center flex flex-col'>
                <h2 className='font-Doppio text-[2.5rem] text-[#463F3F]'>Why choose us?</h2>
            </div>

            <div className='md:px-[5rem] px-[1rem] py-[5rem] items-center flex flex-col'>
                <h2 className='font-Doppio text-[2.5rem] text-[#463F3F]'>Website project case</h2>
                <img src="../src/images/Group 1000004426.png" alt="" />
            </div>

            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default WebsiteBuilding