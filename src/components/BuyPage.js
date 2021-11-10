import React,{useEffect , useState} from "react";
import  Axios  from "axios";
import { random,commerce } from "faker";
import { Container,Col,Row } from "reactstrap";

import { v4 as uuidv4 } from 'uuid';
const apiKey ="KEY"
const localurl = "https://jsonkeeper.com/b/TNCW"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({addInCart}) =>{

    const [product, setProduct] = useState([]);

    // const fetchPhotos = async() =>{
    //     const response = await Axios.get(url,{
    //         header:{
    //             Authorization :apiKey
    //         }
    //     });
    // };

    const fetchPhotos = async() =>{
        const {data} = await Axios.get(localurl,{});
  

    const {photos} =data;

    const allProduct = photos.map(photo => ({
        smallImage : photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: random.word(),
        productPrice: commerce.price(),
        id: random.uuidv4()
    }));
setProduct(allProduct);
console.log(allProduct);
};

    useEffect(() => {
        fetchPhotos();
    }, []);



    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {product.map(product => (
                    <span key={product.id}>{product.productName}</span>
                ))}
            </Row>
        </Container>
    )

}

export default BuyPage;