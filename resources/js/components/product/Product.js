import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import Swal from "sweetalert2";
import ModalAddProduct from "../ModalAddProduct";
import { Link } from "react-router-dom";

const Product = ({
    product,
    handleDeleteProduct,
    handleUpdateProduct,
    grid,
    id = null
}) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                handleDeleteProduct(product.id);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    const RenderView = () => {
        if (grid == true) {
            return (
                <Card className="Product">
                    <CardBody>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>
                            <strong>
                                {product.price ? `${product.price}$` : ""}
                            </strong>
                        </p>
                        <Button color="danger" onClick={handleDelete}>
                            Eliminar
                        </Button>{" "}
                        <ModalAddProduct
                            buttonLabel="editar."
                            edit={true}
                            product={product}
                            handleUpdateProduct={handleUpdateProduct}
                        />{" "}
                        <Link to={`/products/${product.id}`}>
                            <Button>Ver</Button>
                        </Link>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <Card className="Product">
                    <CardBody>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>
                            <strong>
                                {product.price ? `${product.price}$` : ""}
                            </strong>
                        </p>
                    </CardBody>
                </Card>
            );
        }
    };

    return <RenderView />;
};

export default Product;
