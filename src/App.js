import React, { useEffect, useState } from "react";
import logo from "./image.jpg";

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [newData, setNewData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    setPizza(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);

  const filterItem = (categoryItem) => {
    const updateItems = pizza.filter((curElem) => {

      return curElem.isVeg === categoryItem;
    });
    setNewData(updateItems);
  };






  return (
    <main>
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active"  href="#" style={{color: "red"}}>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{color: "red"}}>About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{color: "red"}}>Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="" style={{color: "red"}}>Catagorical</a>
  </li>
</ul>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button className="filter-btn" onClick={() => setNewData(pizza)}>
            All
          </button>
          <button className="filter-btn" onClick={() => filterItem(true)}>
            Veg
          </button>
          <button className="filter-btn" onClick={() => filterItem(false)}>
            Non-Veg
          </button>
        </div>

        <div className="section-center">
          {newData.map((item) => {
            const { id, name, img_url, description, price, rating, isVeg, size } =
              item;




            return (


              <article key={id} className="menu-item">
                <img src={img_url} alt={name} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{name}</h4>
                    <h4 className="price">₹ {price}</h4>
                  </header>
                  <p className="item-text">{description}</p>


                  <div class="btn-group">
  <button class="btn button-css button-css-1 btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Size
  </button>
  <div class="dropdown-menu">
    <form>
  <input type="radio" />  Regular Size
  <br />
  <input type="radio" />  Medium Size
  <br />
  <input type="radio" />  Small Size
 
  </form>
  </div>
  </div>


                  <header>
                    <h4 className="rating">⭐ {rating}</h4>
                    <h4 className="rating">
                      {" "}
                      Type: {isVeg ? "Veg Pizza" : "Non-Veg Pizza"}
                    </h4>
                  </header>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
