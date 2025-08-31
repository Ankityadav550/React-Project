import ProductCategory from "./ProductCategory";
import productcategories from "../data/product-categories";
const Pc=()=>{
    return(
        <>
        <section className="categories">
            <h1>Shop by Category</h1>
            <div className="categories-grid">
                {productcategories.map((category) => (
                    <ProductCategory productcategorydetails={category} />
                ))}
            </div>
        </section>
        </>
);
}

export default Pc;


// using map function to iterate over productcategories