import React from "react";
import '../Header.css';

const Cards = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <img className="card__img" src={props.imgsrc} alt="series_poster"/>
                <div className="card__info">
                    <span className='card__category'>{props.title}</span>
                    <h3 className="card__title">{props.sname} </h3>
                    <a href={props.link} target="_blank" rel="noreferrer" >
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards;