import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { Table, Button,Toast,ToastHeader,ToastBody} from "reactstrap";
import alertify from "alertifyjs";
class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.alert(product.productName + " " + "Removed from cart!");
  }

  renderEmpty() {
    return (
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
          Sepetiniz Boş!
          </ToastHeader>
          <ToastBody>
             Lütfen Ürün Ekleyin!
          </ToastBody>
        </Toast>
      </div>
    );
  }

  renderDetail() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity </th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.quantity}</td>
              <td>{cartItem.unitPrice}</td>

              <td>
                <Button
                  onClick={() => this.removeFromCart(cartItem.product)}
                  color="danger"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.cart.length > 0 ? this.renderDetail() : this.renderEmpty()}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
function mapStateProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateProps, mapDispatchToProps)(CartDetail);
