import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FavoritesContext } from "../FavoritesContext";

function Layout() {
    const [favorites, setFavorites] = useState([])

    function addFavorite(project) {
        if(favorites.includes(project)) {
            return
        }
        setFavorites(favorites.toSpliced(0, 0, project))
    }
    
    function removeFavorite(project) {
        if(!favorites.includes(project)) {
            return
        }
        setFavorites(favorites.toSpliced(favorites.indexOf(project), 1))
    }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            <Navbar />
            <Outlet/>
            <Footer />
        </FavoritesContext.Provider>
    )
}

export default Layout
