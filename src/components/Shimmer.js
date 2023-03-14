const Shimmer = () => {
  return (
    <>
      <div className="flex items-center mr-4">
        <input
          type="text"
          placeholder=""
          className="py-2 px-4 ml-2.5 mr-1 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
        />
        <button className="py-2 px-4 text-white rounded-md bg-green-500 border-none outline-none cursor-pointer text-base font-normal transition-bg-ease-in-out duration-300 hover:bg-green-700">
          Search
        </button>
        <input
          type="text"
          placeholder="Update User Name!"
          className="ml-auto py-2 px-4 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Update User Email!"
          className="ml-auto py-2 px-4 rounded border-none outline-none text-base text-white bg-custom-bg-color shadow-md"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="bg-card-color w-64 h-72 rounded-lg shadow-md p-4 m-4"
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
