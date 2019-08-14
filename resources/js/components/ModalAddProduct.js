import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: "",
            description: "",
            price: ""
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.props.edit == true) {
            const { title, description, price } = this.state;

            await this.props.handleUpdateProduct(
                title,
                description,
                price,
                this.props.product.id
            );
            this.setState(prevState => ({
                modal: !prevState.modal,
                price: "",
                title: "",
                description: ""
            }));
        } else {
            const { title, description, price } = this.state;
            await this.props.handleNewProduct(title, description, price);
            this.setState(prevState => ({
                modal: !prevState.modal,
                price: "",
                title: "",
                description: ""
            }));
        }
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
                <Button
                    color={this.props.edit == true ? "warning" : "primary"}
                    onClick={this.toggle}
                >
                    {this.props.buttonLabel}
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>
                        {this.props.edit == true
                            ? "editando"
                            : "Agregar nuevo producto!"}
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="title"
                                    defaultValue={
                                        this.props.edit == true
                                            ? this.props.product.title
                                            : this.state.title
                                    }
                                    onChange={this.handleInput}
                                    placeholder="Title"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    name="description"
                                    defaultValue={
                                        this.props.edit == true
                                            ? this.props.product.description
                                            : this.state.description
                                    }
                                    onChange={this.handleInput}
                                    placeholder="Description"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="number"
                                    name="price"
                                    defaultValue={
                                        this.props.edit == true
                                            ? this.props.product.price
                                            : this.state.price
                                    }
                                    onChange={this.handleInput}
                                    placeholder="Price"
                                />
                            </FormGroup>
                            <Button
                                color={
                                    this.props.edit == true
                                        ? "success"
                                        : "primary"
                                }
                                type="submit"
                            >
                                {this.props.edit == true
                                    ? "Update product"
                                    : "Send"}
                            </Button>{" "}
                            <Button color="secondary" onClick={this.toggle}>
                                Cancel
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default ModalExample;
