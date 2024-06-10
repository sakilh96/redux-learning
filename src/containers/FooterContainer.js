import { connect } from "react-redux";
import Footer from "../components/Footer";


const mapStateToProps = state =>({
    data: state.cardItems
});

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Footer);