import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import Swal from "sweetalert2";
import ModalAddProduct from "../ModalAddProduct";

function Product({ product, handleDeleteProduct, handleUpdateProduct }) {
    const [editProduct, seteditProduct] = useState({});

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

    const handleUpdate = () => {};

    return (
        <Card className="Product">
            <CardBody>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                    <strong>{product.price}$</strong>
                </p>
                <Button color="danger" onClick={handleDelete}>
                    Eliminar
                </Button>{" "}
                <ModalAddProduct
                    buttonLabel="editar."
                    edit={true}
                    onClick={handleUpdate}
                    product={product}
                    handleUpdateProduct={handleUpdateProduct}
                />
            </CardBody>
        </Card>
    );
}

export default Product;
