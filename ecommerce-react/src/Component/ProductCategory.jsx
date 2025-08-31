const ProductCategory = ({ productcategorydetails }) => {
    const { name, image } = productcategorydetails;
    return (
        <div className="category">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

export default ProductCategory;
