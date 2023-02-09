const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-52 h-52 bg-card-color rounded-lg p-2.5 m-2.5 shadow-md"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
