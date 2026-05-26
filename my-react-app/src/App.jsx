import Productcard from "./Components/Productcard";

const products = [
  {
    id: 1,
    name: "iphone",
    price: "$999"
  },

  {
    id: 2,
    name: "laptop",
    price: "$1200"
  }
];



function App() {
  return (
    <>
      {products.map((product) =>(
        <Productcard
          key={product.id}
          name={product.name}
          price={product.price}
          
          />
      ))}
    </>
  );
}

export default App;