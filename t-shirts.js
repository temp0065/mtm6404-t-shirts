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

const App = () => {
  const [tshirtList, setTshirtList] = React.useState(tshirts);

  return (
    <>
      <ProductPageBanner title={pageBannerTitle} />
      <Tshirts tshirtList={tshirtList} />
    </>
  );
}


const Tshirts = (props) => {
  
  const tshirtList = props.tshirtList.map((tshirt, id) => ({...tshirt, id}));

  return (
    <>
      <main className="p-2 p-md-3">
        <section>
          <div className="px-2 d-flex justify-content-between align-items-end">
            <h2 className="mb-0">Plain T-Shirts</h2>
            <p className="mb-0">{tshirtList.length} Results</p>
          </div>
          <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 w-100 m-auto">
            {tshirtList.map(tshirt => <TshirtItem title={tshirt.title} img={tshirt.image} price={tshirt.price} stock={tshirt.stock} key={tshirt.id} />)}
          </section>
        </section>
      </main>
    </>
  );
}

const TshirtItem = ({title, img, price, stock, key}) => {
  const [tshirtStock, setTshirtStock] = React.useState(stock);
  const [selectedQuantity, setSelectedQuantity] = React.useState(1);

  const handleStockChange = (e) => {
    e.preventDefault();
    setTshirtStock(tshirtStock - selectedQuantity);
  };

  const handleQuantitySelection = (e) => {
    setSelectedQuantity(e.target.value);
  }

  return (
    <>
      <div className="col" key={key}>
        <article className="card text-bg-dark h-100">
          <img src={`./images/${img}`} alt="T-shirt on wall." className="card-img-top"/>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text fs-5">${price}</p>
            <p>{tshirtStock} left</p>
            {tshirtStock ? (
              <TshirtInputField tshirtStock={tshirtStock} onStockChange={handleStockChange} onQuantitySelection={handleQuantitySelection} />
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
      // Select 1 as the default value
      selectFields.push(<option value={i} key={i}>{i}</option>);
    };
    return selectFields;
  }

  return (
    <>
      <form onSubmit={props.onStockChange}>
        <label htmlFor="quantity-select">Quantity:</label>
        <select className="form-select" name="quantity-select" id="quantity-select" onChange={props.onQuantitySelection}>
          {createSelectFields(props.tshirtStock)}
        </select>
        <input className="btn btn-primary" type="submit" value="Buy"/>
      </form>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);