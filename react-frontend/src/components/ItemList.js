import React from "react";

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.setState({
            items: [{
                id: 1,
                name: "Bread",
                pricePerItem: 2.39,
                quantity: 7,
                totalPrice: 16.73
            }, {
                id: 2,
                name: "Milk",
                pricePerItem: 3.00,
                quantity: 5,
                totalPrice: 15.00
            }, {
                id: 3,
                name: "Eggs",
                pricePerItem: 1.70,
                quantity: 10,
                totalPrice: 17.00
            }]
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Item List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price per Item</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.pricePerItem}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ItemList;