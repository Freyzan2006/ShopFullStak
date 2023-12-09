import React from "react";

// css
import css from "./CardDetails.module.scss";
//

// compontends 
import Photo from "./photo/Photo";
import NavLinkItem from "../Header/NavLinkItem/NavLinkItem";
//

interface Props {
    id: number;
    title: string;
    price: number;
    price_type: string;
    isActive: boolean
}

const CardDetails: React.FC<{data: Props}>  = ({ data }) => {
    const { id, title, price, price_type, isActive } = data;


    return (
        <div className= {"card " + css.CARD}>
            <Photo />

            <div className="card-body">
                <h5 className="card-title">Название: { title }</h5>
                <p className="card-text"><b>Цена: { price } { price_type }</b></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{ isActive ? "Да есть" : "Нету" }</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body d-flex gap-5">
                {/* <a href = {"/buy/" + id} className="btn btn-lg btn-primary">Купить</a> */}
                <NavLinkItem url = {"/buy/" + id} name = "Купить" style_item = "btn btn-lg btn-primary" />
                <NavLinkItem url = "/" name = "Назад" style_item="btn btn-lg btn-success" />
                {/* <NavLink to = "/" className="btn btn-lg btn-success">Назад</NavLink> */}
            </div>
        </div>
    )
}

export default CardDetails;