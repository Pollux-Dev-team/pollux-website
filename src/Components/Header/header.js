function Header(){
    return(
        <div className=" mt-8 mb-4 flex flex-row relative bg-white border">
            <div className="flex flex-1 w-max">
                <div className="flex-1"></div>
                <img classNamed="flex-1 mx-auto" src="https://via.placeholder.com/160x90"/>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
            </div>
            <div className="flex flex-row flex-1 justify-center content-around">
                <div className="m-8">
                    Home
                </div>
                <div className="m-8">
                    Prices
                </div>
                <div className="m-8">
                    Portfolio
                </div>
                <div className="m-4 p-4 border rounded-3xl bg-red-700">
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Header;