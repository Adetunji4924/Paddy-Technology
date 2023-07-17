function ContactUs(){
    return(
        <div className="bg-wavy2 bg-no-repeat bg-bottom md:px-[5rem] px-[2rem] py-[5rem] flex justify-center items-center">
            <div className="bg-contact rounded-[30px] shadow-2xl flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-center bg-no-repeat bg-center bg-cover px-5 sm:px-10 py-16 max-w-[100%]">
                <div className="w-[100%]">
                    <h3 className="font-Poppins text-[1.5rem] md:text-[2.5rem] text-[#323131]">Contact us to create your china website</h3>
                    <form action="submit" className="flex flex-col gap-5 w-[100%] md:w-[80%] mt-5">
                        <div>
                            <input className="bg-transparent w-[100%] focus:outline-primary-200 shadow focus:shadow-outline appearance-none border leading-tight py-2 px-3 rounded" placeholder="Name" id="name" type="text" />
                        </div>
                        <div>
                            <input className="bg-transparent w-[100%] focus:outline-primary-200 shadow focus:shadow-outline appearance-none border leading-tight py-2 px-3 rounded" type="text" placeholder="Company Name" id="company" />
                        </div>
                        <div>
                            <input className="bg-transparent w-[100%] focus:outline-primary-200 shadow focus:shadow-outline appearance-none border leading-tight py-2 px-3 rounded" placeholder="E-mail" type="email" name="Email" id="email" />
                        </div>
                        <div>
                            <input className="bg-transparent w-[100%] focus:outline-primary-200 shadow focus:shadow-outline appearance-none border leading-tight py-2 px-3 rounded" placeholder="Your Country" type="text" name="Country" id="country" />
                        </div>
                        <div>
                            <input className="bg-transparent w-[100%] focus:outline-primary-200 shadow focus:shadow-outline appearance-none border leading-tight py-2 px-3 rounded" placeholder="Your Message" type="text" name="message" id="message" />
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="agreement" id="agreement" />
                            <label htmlFor="agreement" className="text-xs">I agree to be contacted by email regarding my request</label>
                        </div>
                        <div>
                            <button type="submit" className="w-[100%] bg-primary-200 rounded py-2 text-white font-Poppins hover:opacity-90">SUBMIT</button>
                        </div>
                    </form>

                    <div className="flex mt-5 gap-5 flex-wrap">
                        <div className="flex items-center gap-2">
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2047 0.424316V2.35275C18.1121 2.35275 19.899 2.83486 21.5655 3.79908C23.1516 4.74321 24.4165 6.00875 25.3601 7.59569C26.3239 9.26299 26.8057 11.0508 26.8057 12.9592H28.7332C28.7332 10.6892 28.161 8.58 27.0165 6.63147C25.9123 4.74321 24.4165 3.24666 22.5292 2.14183C20.5816 0.996821 18.4735 0.424316 16.2047 0.424316ZM6.23614 3.31697C5.69405 3.31697 5.22222 3.48772 4.82067 3.82921L1.71866 6.99305L1.80901 6.93279C1.30707 7.35464 0.97579 7.87692 0.815169 8.49965C0.674625 9.12237 0.71478 9.72501 0.935635 10.3076C1.49781 11.8744 2.25072 13.4814 3.19437 15.1286C4.5195 17.3986 6.0956 19.4375 7.92267 21.2454C10.854 24.1983 14.4981 26.5285 18.855 28.236H18.8851C19.4673 28.4369 20.0496 28.477 20.6318 28.3565C21.2342 28.236 21.7662 27.9748 22.228 27.5731L25.2698 24.5298C25.6713 24.128 25.8721 23.6359 25.8721 23.0533C25.8721 22.4507 25.6713 21.9485 25.2698 21.5467L21.3245 17.5693C20.923 17.1676 20.421 16.9667 19.8187 16.9667C19.2164 16.9667 18.7144 17.1676 18.3129 17.5693L16.4155 19.4978C14.8896 18.7746 13.5645 17.8807 12.4401 16.816C11.3158 15.7313 10.4223 14.4155 9.75978 12.8688L11.6872 10.9403C12.1089 10.4984 12.3197 9.97611 12.3197 9.37347C12.3197 8.75074 12.0787 8.24855 11.5969 7.86688L11.6872 7.95727L7.65162 3.82921C7.25007 3.48772 6.77824 3.31697 6.23614 3.31697ZM16.2047 4.28119V6.20963C17.4294 6.20963 18.5538 6.51095 19.5778 7.11358C20.6218 7.71622 21.445 8.53982 22.0473 9.58439C22.6496 10.6089 22.9508 11.7338 22.9508 12.9592H24.8783C24.8783 11.3923 24.4868 9.93593 23.7037 8.59004C22.9207 7.28433 21.8767 6.23976 20.5716 5.45633C19.2264 4.6729 17.7708 4.28119 16.2047 4.28119ZM6.23614 5.24541C6.29638 5.24541 6.36665 5.27554 6.44696 5.3358L10.3922 9.37347C10.4123 9.45382 10.3922 9.52413 10.332 9.58439L7.47092 12.4168L7.68174 13.0194L8.07325 13.8631C8.39449 14.5461 8.76593 15.209 9.18756 15.8518C9.76981 16.7558 10.4123 17.5292 11.115 18.172C12.0587 19.096 13.1931 19.9397 14.5182 20.703C15.1807 21.0847 15.7429 21.3659 16.2047 21.5467L16.807 21.8179L19.7283 18.8951C19.7685 18.8549 19.7986 18.8349 19.8187 18.8349C19.8388 18.8349 19.8689 18.8549 19.909 18.8951L23.9748 22.9629C24.0149 23.0031 24.035 23.0332 24.035 23.0533C24.035 23.0533 24.0149 23.0734 23.9748 23.1136L20.9631 26.0966C20.5214 26.4783 20.0395 26.5787 19.5175 26.398C15.4217 24.811 12.0085 22.6415 9.27791 19.8895C7.59139 18.2021 6.11568 16.2837 4.85078 14.1343C3.94729 12.5875 3.24457 11.091 2.74263 9.64466V9.61452C2.66232 9.43373 2.65228 9.22281 2.71251 8.98176C2.77274 8.72061 2.88317 8.51973 3.04379 8.37912L6.02533 5.3358C6.08556 5.27554 6.15583 5.24541 6.23614 5.24541ZM16.2047 8.13806V10.0665C17.0078 10.0665 17.6905 10.3477 18.2526 10.9102C18.8148 11.4727 19.0959 12.1556 19.0959 12.9592H21.0234C21.0234 12.0954 20.8025 11.2919 20.3608 10.5486C19.9392 9.80536 19.3569 9.22281 18.614 8.80096C17.8712 8.35903 17.0681 8.13806 16.2047 8.13806Z" fill="black"/>
                            </svg>
                            <div>
                                <p className="font-Poppins text-xs">phone</p>
                                <p className="font-Poppins text-xs text-primary-200">111 1111 1111</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.95455 2.625V4.59624L1.75 8.63565V25.375H26.5682V8.63565L20.3636 4.59624V2.625H7.95455ZM10.0227 4.69318H18.2955V12.6428L14.1591 15.3249L10.0227 12.6428V4.69318ZM11.0568 6.76136V8.82955H17.2614V6.76136H11.0568ZM7.95455 7.0522V11.2855L4.6907 9.18501L7.95455 7.0522ZM20.3636 7.0522L23.6275 9.18501L20.3636 11.2855V7.0522ZM11.0568 9.86364V11.9318H17.2614V9.86364H11.0568ZM3.81818 11.0916L14.1591 17.7809L24.5 11.0916V23.3068H3.81818V11.0916Z" fill="black"/>
                            </svg>
                            <div>
                                <p className="font-Poppins text-xs">Email</p>
                                <p className="font-Poppins text-xs text-primary-200">info@company.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.95455 2.625V4.59624L1.75 8.63565V25.375H26.5682V8.63565L20.3636 4.59624V2.625H7.95455ZM10.0227 4.69318H18.2955V12.6428L14.1591 15.3249L10.0227 12.6428V4.69318ZM11.0568 6.76136V8.82955H17.2614V6.76136H11.0568ZM7.95455 7.0522V11.2855L4.6907 9.18501L7.95455 7.0522ZM20.3636 7.0522L23.6275 9.18501L20.3636 11.2855V7.0522ZM11.0568 9.86364V11.9318H17.2614V9.86364H11.0568ZM3.81818 11.0916L14.1591 17.7809L24.5 11.0916V23.3068H3.81818V11.0916Z" fill="black"/>
                            </svg>
                            <div>
                                <p className="font-Poppins text-xs">Helpdesk</p>
                                <p className="font-Poppins text-xs text-primary-200">www.helpdesk.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className="w-[100%] md:w-[80%]" src="./src/images/FiU1QotbyZsp4IYEJsBcC-ool0lK 1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs