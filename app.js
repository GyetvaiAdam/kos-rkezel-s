const makecards = () => {
  const products = [
    {
      id: 1,
      name: "Choco Bliss",
      price: 1200,
      picture: "choco_bliss.jpg", // Link to the chocolate image
      description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
    },
    {
      id: 2,
      name: "Candy Delight",
      price: 800,
      picture: "candy delight.jpg", // Link to the candy image
      description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
    },
    {
      id: 3,
      name: "Bonbon Royale",
      price: 3000,
      picture: "bonbon royale.jpg", // Link to the bonbon image
      description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
    },
    {
      id: 4,
      name: "Hazel Dream",
      price: 1500,
      picture: "hazel dream.jpg", // Link to the hazelnut chocolate image
      description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
    },
    {
      id: 5,
      name: "Lemon Chew",
      price: 500,
      picture: "lemon chew.jpg", // Link to the lemon candy image
      description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
    },
    {
      id: 6,
      name: "Caramel Treat",
      price: 2000,
      picture: "caramel treat.jpg", // Link to the caramel chocolate image
      description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
    },
    {
      id: 7,
      name: "Berry Blast",
      price: 1000,
      picture: "berry blast.jpg", // Link to the berry candy image
      description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
    },
    {
      id: 8,
      name: "Truffle Heaven",
      price: 4000,
      picture: "truffle heaven.jpg", // Link to the truffle image
      description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
    },
    {
      id: 9,
      name: "Minty Fresh",
      price: 700,
      picture: "minty fresh.jpg", // Link to the mint candy image
      description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
    },
    {
      id: 10,
      name: "Crunchy Delight",
      price: 2500,
      picture: "crunchy delight.jpg", // Link to the crunchy chocolate image
      description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
    },
    {
      id: 11,
      name: "Vanilla Bonbon",
      price: 3500,
      picture: "vanilla bonbon.jpg", // Link to the vanilla bonbon image
      description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
    },
    {
      id: 12,
      name: "Orange Twist",
      price: 600,
      picture: "orange twist.jpg", // Link to the orange candy image
      description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
    }
  ];
  const content = products.map(e => 
    `<div id="${e.id} class="product-card">
    <img src="./img/${e.picture}" alt="${e.name}" title="${e.name}">
    <h3>${e.name}</h3>
    <p>${e.description}</p>
    <p>Ár: ${e.price} Ft</p>
    <button class="add-to-cart-btn">Kosárba</button>
  </div>`);
  return content;
}
const productlist = makecards();
const renderBoxes = (data) =>{
  const boxes = document.querySelector(".products");
  boxes.innerHTML=""
  boxes.innerHTML=data
}
document.addEventListener("DOMContentLoaded", () => {
  renderBoxes(productlist);
});




