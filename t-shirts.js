const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

const pageBannerTitle = 'T-Shirts';

const App = () => {
  const [TshirtList, setTshirtList] = React.useState(tshirts);

  return (
    <>
      <ProductPageBanner title={pageBannerTitle} />
      <Tshirts TshirtList={TshirtList} />
    </>
  );
}

const ProductPageBanner = ({title}) => {

  return (
    <>
      <header className="banner p-2 d-flex flex-column align-items-center justify-content-center text-center bg-primary-subtle">
        <h1 className="display-1 fw-bold mb-0">{title}</h1>
        <p className="fs-2">Welcome to our {title} section at NShop</p>
      </header>
    </>
  )
}

const Tshirts = (props) => {
  return (
    <>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {props.TshirtList.map(tshirt => <TshirtItem title={tshirt.title} img={tshirt.image} price={tshirt.price} stock={tshirt.stock} />)}
      </section>
    </>
  );
}

const TshirtItem = ({title, img, price, stock}) => {
  const [tshirtStock, setTshirtStock] = React.useState(stock);

  const handleStockChange = (quantity) => {
    setTshirtStock(tshirtStock - quantity);
  };

  return (
    <>
      <div className="col">
        <article className="card text-bg-dark h-100">
          <img src={`./images/${img}`} alt="T-shirt on wall." className="card-img-top"/>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">${price}</p>
            <p>{stock} left</p>
            {stock ? (
              <TshirtInputField tshirtStock={tshirtStock} onClick={handleStockChange}/>
            ) : (
              <h4 className="fs-5 text-warning">Out of Stock</h4>
            )}
          </div>
        </article>
      </div>
    </>
  );
}

const TshirtInputField = (props) => {

  const createSelectFields = (stock) => {
    const selectFields = [];
    for (let i = 1; i < stock+1; i++) {
      selectFields.push(<option value={i} key={i}>{i}</option>)
    };
    return selectFields;
  }

  return (
    <>
      <label htmlFor="quantity-select">Quantity:</label>
      <select name="quantity-select" id="quantity-select">
        {createSelectFields(props.tshirtStock)}
      </select>
      <button className="btn btn-primary">Buy</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);