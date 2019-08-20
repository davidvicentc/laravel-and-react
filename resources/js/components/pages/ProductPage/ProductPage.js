import React, { useState, useEffect } from "react";
import Product from "../../product/Product";
import { Container, Row, Col } from "reactstrap";
import Loader from "react-loader-spinner";
import Axios from "axios";

const ProductPage = props => {
    const [product, setProduct] = useState({});
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            let result = await Axios.get(
                `/api/products/${props.match.params.id}`
            );
            setProduct(result.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            {Loading == true ? (
                <div className="App">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                </div>
            ) : (
                <Container>
                    <Row className="justify-content-center align-items-center vh-100">
                        <Col xs="4">
                            <Product product={product} />
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default ProductPage;
