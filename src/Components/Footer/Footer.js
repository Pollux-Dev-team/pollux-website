function Footer(){
    return(
        <div className="flex flex-col">
            <div className="flex flex-row border ">
                <div className="flex-1 flex-col p-20">
                    <img className="m-auto pb-3" src="https://via.placeholder.com/100" alt="Pollux's logo"/>
                    <h3 className="text-center">POLLUX COMPANY</h3>
                </div>
                <div className="flex-1 flex-col p-11">
                    <div className="py-3">Quick links</div>
                    <div className="my-2 bg-yellow-500 w-16 h-1"></div>
                    <div className="py-1">contact us</div>
                    <div className="py-1">Testemonials</div>
                    <div className="py-1">Services</div>
                    <div className="py-1">Previous Work</div>
                </div>
                <div className="flex-1 flex-col p-11">
                    <div className="py-3">Quick links</div>
                    <div className="my-2 bg-yellow-500 w-16 h-1"></div>
                    <div className="py-1">contact us</div>
                    <div className="py-1">Testemonials</div>
                    <div className="py-1">Services</div>
                    <div className="py-1">Previous Work</div>
                </div>
            </div>
            <div className="flex flex-row p-4">
                <div className="text-xs text-gray-400 text-center m-auto">COPYRIGHTS POLLUX COMPANY @ 2021</div>
            </div>
        </div>
    );
}

export default Footer;