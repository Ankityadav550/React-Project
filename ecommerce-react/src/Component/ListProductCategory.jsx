import ProductCategory from './ProductCategory';

const ListProductCategory = () => {
    return (
        <section className="categories">
            <h1>Shop by Category</h1>
            <div className="categories-grid">
                <ProductCategory productcategorydetails={{ name: 'Mens', image: '/menstyle.jpg' }} />
                <ProductCategory productcategorydetails={{ name: 'Womens', image: '/womenstyle.jpg' }} />
                <ProductCategory productcategorydetails={{ name: 'Kids', image: '/kidsstyle.jpg' }} />
                <ProductCategory productcategorydetails={{ name: 'Home and Living', image: '/homeandliving.jpg' }} />
                <ProductCategory productcategorydetails={{ name: 'Beauty', image: '/beauty.jpg' }} />
            </div>
        </section>
    );
};

export default ListProductCategory;

// using directly imported productcategories