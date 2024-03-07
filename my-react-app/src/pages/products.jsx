import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.services";
import { useLogin } from "../Hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";


const ProductsPage = () => {
    
    const { isDarkMode } = useContext(DarkMode);
    const [products, setProducts] = useState([]);
    useLogin();

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    });

    return (
        <Fragment>
        <Navbar />
        <div className={`flex justify-center py-10 ${isDarkMode && "bg-slate-900"}`}>
            <div className="w-4/6 flex flex-wrap mt-11">
                {products.length > 0 && 
                products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} id={product.id} />
                        <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                        <CardProduct.Footer price={product.price} id={product.id} />
                    </CardProduct>
                ))}
            </div>
            <div className="w-2/6 mt-12">
                <div className="fixed">
                    <h1 className="text-3xl font-bold text-teal-500 ml-5 mb-2">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default ProductsPage;