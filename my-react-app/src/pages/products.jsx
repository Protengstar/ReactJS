import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-10">
            <CardProduct>
                <CardProduct.Header image="/img/2.jpg" />
                <CardProduct.Body title="Tea">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!</CardProduct.Body>
                <CardProduct.Footer price="Rp 21.000,00" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/img/1.jpg" />
                <CardProduct.Body title="Coffee">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur nulla corrupti, vitae quae quidem iusto modi maiores! Eligendi nihil repudiandae odio debitis consequatur est ullam, odit placeat similique ducimus!</CardProduct.Body>
                <CardProduct.Footer price="Rp 23.000,00" />
            </CardProduct>
        </div>
    );
};

export default ProductsPage;