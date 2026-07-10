import SkeletonCard from "./SkeletonCard";

function SkeletonGrid() {

    return (

        <div className="container movie-grid">

            {[...Array(12)].map((_,index)=>(

                <SkeletonCard key={index}/>

            ))}

        </div>

    );

}

export default SkeletonGrid;