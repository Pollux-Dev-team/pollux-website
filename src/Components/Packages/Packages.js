function Packages(){
    return(
        <div className="flex flex-col m-12">
            <div className="flex justify-center items-center flex-col m-12">
                <h1 className="text-2xl font-bold mb-2">Our packages</h1>
                <div className="bg-yellow-500 w-16 h-1"></div>
            </div>
            <div className="flex md:flex-row flex-col m-5">
                <div className="flex flex-col bg-blue-300 rounded-md m-5 p-8 md:w-80">
                    <div className="text-center font-bold text-xl p-1">Save money</div>
                    <div className="text-center font-light text-white text-xl pb-1">choose pollux</div>
                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    <p className="text-center">when an unknown printer took a galley of type and scrambled it to make</p>
                </div>
                <div className="flex flex-col mx-3 my-8">
                    <div classname="flex flex-row text-left">
                        <p className="text-2xl mx-3 font-bold italic">Start now with our basic package!</p>
                    </div>
                    <div className="flex md:flex-row flex-col my-5">
                        <div className="flex flex-col mx-3 md:my-none my-3 bg-blue-300 p-3 rounded-md">
                            <div className="font-bold text-center text-2xl p-4">19.99$</div>
                            <div className="text-center text-white">SILVER PACKAGE</div>
                            <ul className="list-inside list-disc p-4">
                                <li>Lorem ipsum is sm.</li>
                                <li>dummy text of the</li>
                                <li>printing and typesetting industry</li>
                                <li>Lorem Ipsum has</li>
                                <li>the industry's stand dummy.</li>
                            </ul>
                            <div className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg">Purchase</div>
                        </div>
                        <div className="flex flex-col mx-3 md:my-none my-3 bg-blue-300 p-3 rounded-md">
                            <div className="font-bold text-center text-2xl p-4">19.99$</div>
                            <div className="text-center text-white">SILVER PACKAGE</div>
                            <ul className="list-inside list-disc p-4">
                                <li>Lorem ipsum is sm.</li>
                                <li>dummy text of the</li>
                                <li>printing and typesetting industry</li>
                                <li>Lorem Ipsum has</li>
                                <li>the industry's stand dummy.</li>
                            </ul>
                            <div className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg">Purchase</div>
                        </div>
                        <div className="flex flex-col mx-3 md:my-none my-3 bg-blue-300 p-3 rounded-md">
                            <div className="font-bold text-center text-2xl p-4">19.99$</div>
                            <div className="text-center text-white">SILVER PACKAGE</div>
                            <ul className="list-inside list-disc p-4">
                                <li>Lorem ipsum is sm.</li>
                                <li>dummy text of the</li>
                                <li>printing and typesetting industry</li>
                                <li>Lorem Ipsum has</li>
                                <li>the industry's stand dummy.</li>
                            </ul>
                            <div className="text-white w-24 mx-auto my-3 text-center bg-red-500 rounded-lg">Purchase</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col"></div>
            </div>
        </div>
    );
}

export default Packages;