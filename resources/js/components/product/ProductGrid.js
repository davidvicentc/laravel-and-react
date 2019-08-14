import React from "react";
import Product from "./Product";
import { Col, Row } from "reactstrap";

export default function ProductGrid({
    products,
    handleDeleteProduct,
    handleUpdateProduct
}) {
    return (
        <Row>
            {products.map(product => (
                <Col xs="3" key={product.id}>
                    <Product
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                        handleUpdateProduct={handleUpdateProduct}
                    />
                </Col>
            ))}
        </Row>
    );
}
