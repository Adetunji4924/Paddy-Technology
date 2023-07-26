import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import ContactUs from '../Contact-Us.jsx'

function SearchEngine() {
    return(
        <div>
            <div className='md:px-[5rem] px-[1rem] pt-[2rem] bg-search bg-cover'>
                <Header />
                <div className='md:pt-[5rem] pt-[2rem] flex flex-col items-center md:items-start'>
                    <h2 className='text-white font-Doppio font-bold lg:text-[4rem] text-[2.1rem] drop-shadow-lg'>search engine</h2>
                    <p className='text-white font-Doppio md:text-[1.2rem] text-[1rem] md:max-w-[60%] max-w-[100%] md:text-start text-center md:pt-[2rem] pt-[1rem] md:pb-[15rem] pb-[2rem]'>We work with you to develop an SEO strategy for your target Chinese market</p>
                </div>
            </div>

            <div className='flex flex-col items-center md:px-[5rem] px-[2rem] md:py-[5rem] py-[2rem] gap-10'>
                <div className="flex items-center sm:flex-row flex-col justify-center sm:gap-20 gap-5 mt-5">
                    <div className="sm:w-[35%] w-full">
                        <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">Chinese SEO</h4>
                        <p className="font-Overpass text-[#918E8E] mt-5">Baidu's (China's most popular search engine) algorithm is very different from Google's, requiring a separate strategy with strong Chinese language skills and expertise in Chinese numbers.</p>
                    </div>

                    <img className="sm:w-[35%] w-full" src="./src/images/image 652.png" alt="" />
                </div>

                <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-20 gap-5">
                    <img className="sm:w-[35%] w-full" src="./src/images/image 667.png" alt="" />

                    <div className="sm:w-[35%] w-full">
                        <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">competition analysis</h4>
                        <p className="w-full font-Overpass text-[#918E8E] mt-5">Baidu's (China's most popular search engine) algorithm is very different from Google's, requiring a separate strategy with strong Chinese language skills and expertise in Chinese numbers.</p>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-20 gap-5">
                    <div className="sm:w-[35%] w-full">
                        <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">develop a strategy</h4>
                        <p className="font-Overpass text-[#918E8E] mt-5">Baidu's (China's most popular search engine) algorithm is very different from Google's, requiring a separate strategy with strong Chinese language skills and expertise in Chinese numbers.</p>
                    </div>

                    <img className="sm:w-[35%] w-full" src="./src/images/image 668.png" alt="" />
                </div>

                <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-20 gap-5">
                    <img className="sm:w-[35%] w-full" src="./src/images/image 652 (1).png" alt="" />
                    <div className="sm:w-[35%] w-full">
                        <h4 className="font-Overpass text-[1.5rem] uppercase text-primary-200">Search Engine Marketing</h4>
                        <p className="w-full font-Overpass text-[#918E8E] mt-5">Baidu's (China's most popular search engine) algorithm is very different from Google's, requiring a separate strategy with strong Chinese language skills and expertise in Chinese numbers.</p>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-20 gap-5">
                    <div className="sm:w-[35%] w-full">
                        <h4 className="font-Overpass text-[1.5rem] uppercase text-primary-200">China Strategic Consulting</h4>
                        <p className="w-full font-Overpass text-[#918E8E] mt-5">Baidu's (China's most popular search engine) algorithm is very different from Google's, requiring a separate strategy with strong Chinese language skills and expertise in Chinese numbers.</p>
                    </div>

                    <img className="sm:w-[35%] w-full" src="./src/images/image 669.png" alt="" />
                </div>
            </div>

            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default SearchEngine