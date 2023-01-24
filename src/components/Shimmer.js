const Shimmer = () => {
    return (
        <div className="restaurant-list">
        {Array(15).fill("").map((e, index)=><div key={index} className="shimmer-content">
        </div>)}
        </div>
    )
}

export default Shimmer;
