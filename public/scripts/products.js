var ProductCategoryRow = React.createClass({
  render : function() {
    return (<tr><th colSpan="3">{ this.props.category }</th></tr>);
  }
});

var ProductRow = React.createClass({
  render : function() {
      return (
        <tr>
          <td> { this.props.product.brand }</td>
          <td>{ this.props.product.name }</td>
          <td>{ this.props.product.price }</td>
        </tr>
      );
  }
});

var ProductTable = React.createClass({
  render : function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={ product.category } key={ product.category } />);
      }
      rows.push(<ProductRow product={ product } key={ product.name } />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render : function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  render : function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={ this.props.products } />
      </div>
    );
  }
});

var PRODUCTS = [
  { category : "Shirts", price : "$15", brand : "J. Crew", name : "Elsa" },
  { category : "Shirts", price : "$12", brand : "J.Crew", name : "Joy" },
  { category : "Pants", price : "$21", brand : "J.Crew", name : "Margaret" }
];

ReactDOM.render(
  <FilterableProductTable products={ PRODUCTS } />,
  document.getElementById("content")
);
