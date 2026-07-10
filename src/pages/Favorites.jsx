import { useContext } from "react";

import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";

import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {

    const { favorites } =
        useContext(FavoritesContext);

    return (

        <>

            <Navbar />

            <div className="container">

                <h1
                    style={{
                        marginTop:"120px",
                        marginBottom:"40px",
                        textAlign:"center"
                    }}
                >
                    ❤️ My Favorites
                </h1>

                {
favorites.length===0?

<div
style={{
textAlign:"center",
padding:"80px"
}}
>

<h2>No Favorite Movies ❤️</h2>

<p>
Start adding movies from the Home page.
</p>

</div>

:

<MovieGrid movies={favorites}/>

}

            </div>

        </>

    );

}

export default Favorites;