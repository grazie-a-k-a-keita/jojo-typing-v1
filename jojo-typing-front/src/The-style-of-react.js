//index.jsにコピーすることで確認可能。

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const data = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball",
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch",
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5",
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
// ];

// function CategoryRow(props) {
//   return (
//     <tr>
//       <th>{props.category}</th>
//     </tr>
//   );
// }

// function ProductRow(props) {
//   const name = props.stock ? (
//     props.name
//   ) : (
//     <span style={{ color: "red" }}>{props.name}</span>
//   );
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{props.price}</td>
//     </tr>
//   );
// }

// function Table(props) {
//   let rows = [];
//   let prevCategory = "";
//   const stockFiltered = props.showOnlyStocked
//     ? props.products.filter((product) => product.stocked)
//     : props.products;
//   stockFiltered
//     .filter((product) =>
//       product.name.toLowerCase().includes(props.filterText.toLowerCase())
//     )
//     .forEach((product) => {
//       if (product.category !== prevCategory) {
//         rows.push(<CategoryRow category={product.category} />);
//         prevCategory = product.category;
//       }
//       rows.push(
//         <ProductRow
//           name={product.name}
//           price={product.price}
//           stock={product.stocked}
//         />
//       );
//     });

//   return (
//     <table>
//       <tr>
//         <th>Name</th>
//         <th>Price</th>
//       </tr>
//       {rows}
//     </table>
//   );
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleInput = this.handleInput.bind(this);
//     this.handleCheck = this.handleCheck.bind(this);
//   }

//   handleInput(e) {
//     this.props.handleInput(e.target.value);
//   }

//   handleCheck(e) {
//     this.props.handleCheck(e.target.checked);
//   }

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleInput}
//         />
//         <div>
//           <input
//             type="checkbox"
//             checked={this.props.showOnlyStocked}
//             onChange={this.handleCheck}
//           />
//           <span>Only show products in stock</span>
//         </div>
//       </form>
//     );
//   }
// }

// class StockTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { filterText: "", showOnlyStocked: false };
//     this.handleInput = this.handleInput.bind(this);
//     this.handleCheck = this.handleCheck.bind(this);
//   }

//   handleInput(input) {
//     this.setState({
//       filterText: input,
//     });
//   }

//   handleCheck(checked) {
//     this.setState({
//       showOnlyStocked: checked,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           showOnlyStocked={this.state.showOnlyStocked}
//           handleInput={this.handleInput}
//           handleCheck={this.handleCheck}
//         />
//         <Table
//           products={this.props.data}
//           filterText={this.state.filterText}
//           showOnlyStocked={this.state.showOnlyStocked}
//         />
//       </div>
//     );
//   }
// }

// root.render(<StockTable data={data} />, document.getElementById("root"));
