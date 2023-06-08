import React from "react";

function ProductList() {
    const productList = ["Bat", "Ball", "Stump", "Shoes","Ball"];
    const product = productList.map((product,index) => <li key={index}>{product}</li>);
    return (
      <div>
        <h1>Product List</h1>
        <ul>{product}</ul>
      </div>
    );

//   const productList = [
//     {
//       id: 1,
//       name: "Product1",
//       price: 100,
//     },
//     {
//       id: 2,
//       name: "Product2",
//       price: 200,
//     },
//     {
//       id: 3,
//       name: "Product3",
//       price: 300,
//     },
//     {
//       id: 4,
//       name: "Product4",
//       price: 400,
//     },
//   ];

//   const product = productList.map((product) => (
//     <li key={product.id}>
//       {product.id} - {product.name} - {product.price}
//     </li>
//   ));

//   return <ul>{product}</ul>;
}

export default ProductList;
