import React, { useEffect, useState } from "react";
import ProductGrid from "./product/ProductGrid";
import { Container } from "reactstrap";
import Axios from "axios";
import ModalAddProduct from "./ModalAddProduct";
export default function App() {
    const [products, setproducts] = useState([]);

    const fetchData = async () => {
        let result = await Axios.get("/api/products");
        setproducts(result.data);
        console.log(result);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleNewProduct = async (title, description, price) => {
        let result = await Axios.post("/api/products", {
            title,
            description,
            price
        });
        fetchData();
    };

    const handleDeleteProduct = async id => {
        await Axios.delete(`/api/products/${id}`);
        fetchData();
        console.log("producto eliminado con id: ", id);
    };

    const handleUpdateProduct = async (title, description, price, id) => {
        await Axios.put(`/api/products/${id}`, {
            title,
            description,
            price
        });
        fetchData();
    };
    return (
        <div className="App">
            <Container>
                <ProductGrid
                    products={products}
                    handleDeleteProduct={handleDeleteProduct}
                    handleUpdateProduct={handleUpdateProduct}
                />
                <ModalAddProduct
                    handleNewProduct={handleNewProduct}
                    buttonLabel="agrega un producto."
                />
            </Container>
        </div>
    );
}
