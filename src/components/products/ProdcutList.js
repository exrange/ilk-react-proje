import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table,Button} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as  cartActions from "../../redux/actions/cartActions"
import alertify from  "alertifyjs"
class ProdcutList extends Component {
  
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product)=>{

    this.props.actions.addToCart({quantity:1,product})

    alertify.success(product.productName + " " + "Added to cart!")



  }
  
 

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning"> Products </Badge>

          <Badge color="success">
            {this.props.currentCategory.categoryName}{" "}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity per Unit</th>
              <th>Unit in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.addToCart(product)} color="success">Add To Cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.ProductListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart,dispatch),
     
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdcutList);
