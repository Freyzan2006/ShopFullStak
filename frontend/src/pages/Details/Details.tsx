import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

// css
import css from "./Details.module.scss";
//

// components 
import CardDetails from "../../components/CardDetails/CardDetails";
//




const Details: React.FC = () => {

    
    const { id } = useParams()


    const [data, setData] = useState([]);

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/item/' + id);
                setData(response.data);
            } catch (error) {
                console.error("Не получилоь получить item c flask" + error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div className="container">
            <main className = { css.Details }>
                <CardDetails data = { data } />
            </main>
        </div>
    )
}

export default Details;