function Footer() {
    return(
        <div className=" flex flex-col bg-footer bg-center bg-cover bg-no-repeat px-10 py-10">
            <div className="flex flex-wrap justify-between mt-10 md:px-[5rem] px-[0rem] gap-5">
                <img src="./src/images/FuzdKPDWXeDmRellSHvrq-LNnOSG 1.png" alt="" />
                <div>
                    <p className="font-Dappio text-lg font-semibold text-white">Website</p>
                    <ul>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">building</a></li>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">search engine</a></li>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">Wechat development</a></li>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">Virtual host</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-Dappio text-lg font-semibold text-white">Connect</p>
                    <ul>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">Email: pd@hzpady.com</a></li>
                        <li><a className="font-Dappio text-sm hover:underline text-white" href="\">Tel: 0800 5463 7532</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 mb-10 pt-3 border-t-2 border-gray-300 border-opacity-50 flex justify-between">
                <p className="font-Dappio text-sm text-white">Address: 2F-203, Dongye Beiruan Science and Technology Building,</p>
                <p className="font-Dappio text-sm text-white">Hangzhou, China</p>
            </div>
          
        </div>
    )
}

export default Footer