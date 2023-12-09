import React from "react";

// css 
import css from "./Card.module.scss";
//

// Compontent
import Photo from "./photo/Photo";
import NavLinkItem from "../Header/NavLinkItem/NavLinkItem";
//

interface Props {
    data: object
    id: number
    title: string
    price: number
    price_type: string
}

const Card: React.FC<{data: Props}> = ({ data }) => {
   
    const { id, title, price, price_type } = data;

    
    return (
        <div className={css.CARD + " card"} >
            <Photo props={ id } />
            <div className="card-body">
                <h5 className="card-title">Название: { title }</h5>
                <p className="card-text"><b>Цена: { price } { price_type }</b></p>
                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                    {/* <a href= {"/buy/" + id} className="btn btn-lg btn-primary">Купить</a>
                    <a href= {"/details/" + id} className="btn btn-lg btn-success">Подробние</a> */}
                    <NavLinkItem url = {"/buy/" + id} name = "Купить" style_item = "btn btn-lg btn-primary" />
                    <NavLinkItem url = {"/details/" + id} name = "Подробние" style_item = "btn btn-lg btn-success" />
                </div>
            </div>
        </div>
    )
}

export default Card;