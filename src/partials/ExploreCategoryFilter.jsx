import React, { useState } from "react";
import styles from "./styles/ExploreCategoryFilter.module.css";
import CategoryIcons from "../icons/categories";

const ExploreCategoryFilter = () => {
    const [category, setCategory] = useState('');
    const categories = [
        {name: "Exhibition", icon: CategoryIcons.Exhibition, event_count: 3},
        {name: "Workshop", icon: CategoryIcons.Workshop, event_count: 23},
        {name: "Conference", icon: CategoryIcons.Conference, event_count: 17},
        {name: "Live Music / Concert", icon: CategoryIcons.Concert, event_count: 37},
        {name: "Show & Performance", icon: CategoryIcons.ShowPerformance, event_count: 20},
        {name: "Attraction", icon: CategoryIcons.Attraction, event_count: 26},
        {name: "Accomodation", icon: CategoryIcons.Accomodation, event_count: 14},
        {name: "Seminar", icon: CategoryIcons.Seminar, event_count: 14},
        {name: "Festival", icon: CategoryIcons.Festival, event_count: 19},
        {name: "Meetups", icon: CategoryIcons.Meetup, event_count: 34},
        {name: "Competition", icon: CategoryIcons.Competition, event_count: 42},
        {name: "Others", icon: CategoryIcons.Other, event_count: 14},
    ];

    return (
        <div className={styles.CategoryFilter}>
            <div className={`${styles.CategoryItem} ${category === '' ? styles.Active : ''}`} onClick={() => setCategory('')}>Semua</div>
            {
                categories.map((cat, c) => (
                    <div className={`${styles.CategoryItem} ${category === cat.name ? styles.Active : ''}`} key={c} onClick={() => setCategory(cat.name)}>
                        <img src={cat.icon} alt={cat.name} className={styles.CategoryIcon} />
                        {cat.name}
                    </div>
                ))
            }
        </div>
    )
}

export default ExploreCategoryFilter;