import "./Product.css";

const Product = ({ title, price }) => {
    let style = { backgroundColor: price > 30000 ? "Green" : "" };
    return (
        <div className="Product" style={style}>
            <h2>{title}</h2>
            <h5>{price}</h5>
            {price > 30000 ? <h6>5%</h6> : ""}
        </div>
    );
};

export default Product;
