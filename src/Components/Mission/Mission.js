function Mission() {
  return (
    <div className="flex md:flex-row flex-col mb-36 md:mt-36 mt-24 md:ml-0 ml-12 mr-12">
      <div className="flex md:flex-row flex-col flex-1 md:-ml-12 mx-auto ">
        <div class="bg-blue-300 md:mx-0 mx-auto my-auto rounded-full h-80 w-80 flex"></div>
        <div className="flex flex-col md:text-left text-center flex-1 my-auto z-10 md:-ml-48 -ml-0 md:mt-auto -mt-48 md:mb-auto -mb-0">
          <h1 className="md:text-4xl text-3xl font-bold my-2 ">Mission statement</h1>
          <div className="bg-yellow-500 w-32 h-1 my-2 md:mx-0 mx-auto"></div>
          <p className="my-2 font-bold text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 m-12">
        <img src="https://via.placeholder.com/400x300/" alt="Header" />
      </div>
    </div>
  );
}

export default Mission;
