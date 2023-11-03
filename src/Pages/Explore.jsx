import React from "react";
import Header from "../partials/Header";
import styles from "./styles/Explore.module.css";
import ExploreFilter from "../partials/ExploreFilter";
import ExploreCategoryFilter from "../partials/ExploreCategoryFilter";
import Footer from "../partials/Footer";

const Explore = () => {
    return (
        <>
            <Header expand={true} />
            <ExploreCategoryFilter />
            
            <div className={`content ${styles.Container}`}>
                <div className={styles.Content}>
                    <ExploreFilter />
                    ssdsds
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Explore;