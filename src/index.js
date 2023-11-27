import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
function App(){
    return(  
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    )
}

function Header(){
    return (
        <header className="header">
           <h1 >Fast React Pizza Co.</h1>
        </header>
    )
}
function Menu(){
    const pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false,
        },
      ];
      
    return (
        <main className="menu">
            <h2>Our Menus</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our store over, all organic, all delicious.</p>
            <ul className="pizzas">
          {
           pizzaData.length>0&& 
            pizzaData.map((pizza)=>{
                return (
                    <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut}/>
                )
            })
           
          }
          </ul>
        </main>
    )
}
function Pizza({name,ingredients,photoName,price,soldOut}){
  // if(soldOut) return null;
   return (
        <div className={`pizza ${soldOut?`sold-out`:""}`}>
            <img src={photoName} alt="pizza"/>
            <div>
                <h2>{name}</h2>
                <p>{ingredients}</p>
                <span>{soldOut?"SOLD OUT":price}</span>
            </div>
        </div>
    )
}
function Order(){
  return (
    <div className="order">
      <p> We're currently Open!</p>   
      <button className="btn">Order</button>
   </div>
  )
}
function Footer(){
    const hour=new Date().getHours()
    console.log(hour)
    const openHour=9;
    const closeHour=22;
    const isOpen=hour>=openHour&&hour<=closeHour
    console.log(isOpen)
    console.log(hour)
    return (
        <footer className="footer">{new Date().toLocaleTimeString()} 
        {
             isOpen?
              <Order/>:
            <p>We're currently Closed!</p>
         }
         </footer>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
//strict mode will render our apps twice during development, to check if something is wrong or not.
root.render(
    <React.StrictMode> 
        <App/>
    </React.StrictMode>
)