import { useEffect, useState } from "react";
import { json, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FavoritesContext } from "../FavoritesContext";

function Layout() {
    const [favorites, setFavorites] = useState(localStorage.getItem("favorites") === null ? [] : JSON.parse(localStorage.getItem("favorites")))

    function addFavorite(pProject) {
        if(typeof favorites.find(favorite => favorite.id === pProject.id) !== "undefined") {
            return
        }
        setFavorites(favorites.toSpliced(0, 0, pProject))
    }

    function removeFavorite(pProject) {
        let project = favorites.find(favorite => favorite.id === pProject.id)
        console.log("REMOVE", project);
        if(typeof project === "undefined") {
            return
        }
        console.log("COSO", favorites.toSpliced(favorites.indexOf(project), 1));
        setFavorites(favorites.toSpliced(favorites.indexOf(project), 1))
    }

    useEffect(() => {
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
