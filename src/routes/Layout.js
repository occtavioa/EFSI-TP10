import { useEffect, useState } from "react";
import { json, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FavoritesContext } from "../FavoritesContext";

function Layout() {
    const [favorites, setFavorites] = useState(localStorage.getItem("favorites") === null ? [] : JSON.parse(localStorage.getItem("favorites")))

    function addFavorite(pProject) {
        if(!favorites.find(favorite => favorite.id === pProject.id) === undefined) {
            return
        }
        setFavorites(favorites.toSpliced(0, 0, pProject))
    }

    function removeFavorite(pProject) {
        let project = favorites.find(favorite => favorite.id === pProject.id)
        if(project === undefined) {
            return
        }
        setFavorites(favorites.toSpliced(favorites.indexOf(project), 1))
    }

    useEffect(() => {
        console.log(favorites);
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            <Navbar />
            <Outlet/>
            <Footer />
        </FavoritesContext.Provider>
    )
}

export default Layout
