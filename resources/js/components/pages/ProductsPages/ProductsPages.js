import React, { useEffect, useState } from "react";
import ProductGrid from "../../product/ProductGrid";
import { Container } from "reactstrap";
import Axios from "axios";
import ModalAddProduct from "../../ModalAddProduct";
import Loader from "react-loader-spinner";

function ProductsPage() {
    const [products, setproducts] = useState([]);
    const [Loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        let result = await Axios.get("/api/products");
        setproducts(result.data);
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleNewProduct = async (title, description, price) => {
        await Axios.post("/api/products", {
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
                <div>
                    <Container>
                        <ProductGrid
                            grid={true}
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
            )}
        </>
    );
}

export default ProductsPage;
