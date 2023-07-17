function Develop() {
    return(
        <div className="flex flex-col items-center md:px-[5rem] px-[2rem] bg-wavy1 bg-center bg-no-repeat bg-fixed">
            <h3 className="font-Koho text-[1.5rem] sm:text-[2rem] text-center text-primary-200 uppercase font-semibold">How we can help you develop your market in China</h3>

            <div className="flex items-center sm:flex-row flex-col justify-center gap-10 mt-5">
                <div className="sm:w-[30%] w-full">
                    <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">WEBSITE DESIGN</h4>
                    <p className="font-Overpass text-[#918E8E] mt-5">Use a homegrown CMS to create beautiful websites that are fully customized. A properly built custom website can help you get the most out of your marketing efforts</p>
                </div>

                <img className="sm:w-[50%] w-full" src="./src/images/Group 1000004401.png" alt="" />
            </div>

            <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-10 gap-5">
                <img className="sm:w-[50%] w-full" src="./src/images/modern_3d_illustration_of_young_man_siting_on_search_bar_concept [Converted]-01 1.png" alt="" />

                <div className="sm:w-[50%] w-full">
                    <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">search engine Optimization</h4>
                    <p className="sm:w-[60%] w-full font-Overpass text-[#918E8E] mt-5">Accurately and quickly respond to the daily changing algorithm of Baidu search engine. By implementing the most suitable SEO strategy for the Chinese market, your website will achieve long-term and stable traffic growth.</p>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col items-center justify-center gap-10">
                <div className="sm:w-[30%] w-full">
                    <h4 className="font-Overpass sm:text-[1.5rem] text-[1.2rem] uppercase text-primary-200">wechat development</h4>
                    <p className="font-Overpass text-[#918E8E] mt-5">Provide WeChat official account agent operation, WeChat mini program development and other services.</p>
                </div>

                <img className="sm:w-[50%] w-full" src="./src/images/modern_3d_illustration_of_clipboard_with_checklist_concept [Converted]-01 2.png" alt="" />
            </div>

            <div className="flex sm:flex-row flex-col-reverse items-center justify-center gap-10">
                <img className="sm:w-[50%] w-full" src="./src/images/modern_3d_illustration_of_appointment_concept [Converted]-01 1.png" alt="" />
                <div className="sm:w-[50%] w-full">
                    <h4 className="font-Overpass text-[1.5rem] uppercase text-primary-200">virtual host</h4>
                    <p className="sm:w-[60%] w-full font-Overpass text-[#918E8E] mt-5">The web hosting is located in mainland China, which is also good for SEO. We regularly handle everything from server maintenance to backups.</p>
                </div>
            </div>
        </div>
    )
}

export default Develop