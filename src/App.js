import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


//product data
let data = [
  {
    image:
      "https://i.pinimg.com/originals/83/68/e5/8368e541fa27725150776008fda921d3.jpg",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$40.00 - $80.00",
    cart: false,
  },
  {
    image:
      "https://i.pinimg.com/originals/70/44/12/704412a388fe3785a22291dff28d2d26.jpg",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://i5.walmartimages.com/asr/b68bfe99-dc97-404c-b001-9b356a446b11_1.f986f4d7413c86603ad44b0f07f8e4bb.jpeg",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://i.ebayimg.com/images/i/162059080412-0-1/s-l1000.jpg",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
  {
    image:
      "https://ebhfashion.com/wp-content/uploads/00380-2-1165.jpg",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://ae01.alicdn.com/kf/HTB1Zrl1HVXXXXXcXpXXq6xXFXXX6/Free-shipping-European-English-style-Fashion-bone-china-coffee-cup-set-fancy-ceramic-coffee-survices-top.jpg_640x640.jpg",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$120.00 - $280.00",
    cart: false,
  },
  {
    image:
      "https://allforfashiondesign.com/wp-content/uploads/2013/06/te-10.jpg",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://i0.wp.com/africanboutique.in/wp-content/uploads/2019/12/81dLKXRcbkL._UL1500_.jpg",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // function for count  (addcart and remove cart action)
  addcart = (event) => {
    if (event) {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
      this.scrollTop();
    } else {
      this.setState(() => ({
        count: this.state.count - 1,
      }));
      this.scrollTop();
    }
  };

  // function to scrollup after add/remove cart
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  
  render() {
    return (
      <>
        <Navbar count={this.state.count} />
        <Header />
        <div className="card-content d-flex flex-wrap justify-content-center">
          {data.map((item, index) => {
            // to iterate Products
            return (
              <Card
                key={index}
                image={item.image}
                sale={item.sale}
                title={item.title}
                star={item.star}
                discount={item.discount}
                price={item.price}
                cart={item.cart}
                addcart={this.addcart}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;