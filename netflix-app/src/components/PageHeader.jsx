import React from "react";
import '../Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PageHeader = () => {
    return (
        <>
            <div className="header">
                <img className="netflix_poster" src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=681&h=383&crop=1&resize=681%2C383" alt="netflix_poster" />
                       <select className="dropdown-select">
                       <FontAwesomeIcon icon="fa-thin fa-globe" size="2xs" />
                       <option value="EN">English</option>
                       <option value="HI">Hindi</option>7
                       </select>
                    </div>
        </>
    );
}

export default PageHeader;