import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
    props: number;
}

const Photo: React.FC<Props> = (props) => {
    const [image, setImage] = useState('');

    const id = props.props;
    useEffect(() => {
        const getImage = async () => {
            await axios.get(`http://127.0.0.1:5000/image/` + id, {responseType: 'blob'})
                .then(res => {
                    const url = URL.createObjectURL(new Blob([res.data]));
                    setImage(url);
                })
                .catch(err => {
                    console.log("Ошибка произошла при получении image с flask " + err);
                })

        }
        
        getImage();
    }, []);



    return (
        <img src={image} className="card-img-top" alt="Картинка товара" />
    );
}

export default Photo;