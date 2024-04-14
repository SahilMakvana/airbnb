import Product from "./Product.jsx";

const ProductList = () => {
    return (
        <>
            <Product title="Mobile" price={25000} />
            <Product title="Laptop" price={40000} />
            <Product title="Pen" price={5} />
        </>
    );
};

export default ProductList;
