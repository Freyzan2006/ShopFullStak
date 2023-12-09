import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// css
import css from "./Search.module.scss";
//

// components 
import NavLinkItem from "../NavLinkItem/NavLinkItem";
//


const Search: React.FC = () => {

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

    
    // const [info, setInfo] = useState([])
    const [info, setInfo] = useState<{ id: number; title: string }[]>([]);
    const Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input: string = (e.target as HTMLInputElement).value;
        

        if (input != "") {
            // data.forEach((el: {title: string}) => {
            //     if (el.title.includes(input)) {
            //         console.log(el.title);
                    
            //         setInfo(info.push(el.title))
            //         console.log(info)
            //     }
            // })

            setInfo((prevInfo: {id: number; title: string}[]) => {
                const filteredInfo = data
                    .filter((el: { title: string }) => el.title.includes(input))
                    .map((el: { id: number ,title: string }) => ({
                        id: el.id,
                        title: el.title
                    }));
                
                prevInfo;

                return filteredInfo;
            });
        } else {
            setInfo([])
        }
    }

    return (
        <form className={css.Search + " col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"} role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" onInput ={ Input } />
            <ul className = {css.Search_list}>
                { info.map((el: { id: number, title: string }) => (
                    <li key={el.id}>
                        {/* <a href= {"/details/" + el.id} className="btn btn-success">{ el.title }</a> */}
                        <NavLinkItem url = {"/details/" + el.id} name = {el.title} style_item = "btn btn-success" />
                    </li>
                ))}
            </ul>   
        </form>
    )
}

export default Search;