var React = require('react');

function Sidebar_Nav(){
  return(
      <div className="col-sm-4">
        <ul className="sidebar-nav">
          <li><a href="/catalog">Home</a></li>
          <li><a href="/catalog/products">All Products</a></li>
          <li><a href="/catalog/productcategory">All Product Categories</a></li>
          <li><a href="/catalog/productinstances">All Product instances</a></li>
          <hr />
          <li><a href="/catalog/productcategory/create">Create new product category</a></li>
          <li><a href="/catalog/product/create">Create new product</a></li>
          <li><a href="/catalog/productinstance/create">Create new product instance</a></li>
        </ul>
      </div>
  );
}
module.exports = Sidebar_Nav;
