import { connect } from "react-redux";
import Home from "../components/Home";
import { cartHandler } from "../services/actions/Action";
import { removeCart } from "../services/actions/Action";

const mapStateToProps = state => ({
    data: state
})

const mapDisPatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(cartHandler(data)),
    removeCartHandler:data => dispatch(removeCart(data))
})




export default connect(mapStateToProps,mapDisPatchToProps)(Home);