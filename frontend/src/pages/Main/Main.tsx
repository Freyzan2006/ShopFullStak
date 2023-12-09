import { useEffect, useState } from "react";
import axios from "axios";

// css 
import css from "./Main.module.scss";
import Card from "../../components/Card/Card";
//

interface dataProps {
    data: object;
    id: number;
    title: string;
    price: number;
    price_type: string;
}
  

const Main: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/items');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (


        <main className= {css.main + " container main"}>
            <h1>Онлайн магазин</h1>

            {data ? data.map((el: dataProps) => (
                <Card key = {el.id} data = {el} />
            )) : <h2>Нету товаров на сайте</h2>}
        </main>
    );
}

export default Main;


// {% block body %}
// <div class="container main">
//     <h1>Онлайн магазин</h1>

//     {% if data %}
//         {% for el in data %}
//             <div class="card" style="width: 30rem;">
//                 <img src="{{ url_for('display_image', filename = el.image) }}" class="card-img-top" alt="Картинка товара">
//                 <div class="card-body">
//                     <h5 class="card-title">Название: {{ el.title }}</h5>
//                     <p class="card-text"><b>Цена: {{ el.price }} {{ el.price_type }}</b></p>
//                     <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
//                         <a href= "/buy/{{ el.id }}" class="btn btn-lg btn-primary">Купить</a>
//                         <a href= "/details/{{ el.id }}" class="btn btn-lg btn-success">Подробние</a>
//                     </div>
//                 </div>
//             </div>
//         {% endfor %}  
        
//     {% else %}
//             <h2>Нету товаров на сайте</h2>
//     {% endif %}
// </div>
// {% endblock %}