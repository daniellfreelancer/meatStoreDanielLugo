export const PRODUCT = [
  {
    id:0,
    title: "Not Burger", 
    description: "Plant based",
    weight:"150 grs", 
    price: 1000,
    imgProduct: 'https://d3cgkqmmewql8l.cloudfront.net/site/products/1635350198931.png',
  },
  {
    id:1,
    title: "Not chicken nuggets", 
    description: "Plant based",
    weight:"300 grs", 
    price: 2500,
    imgProduct: "https://d3cgkqmmewql8l.cloudfront.net/site/products/1641414056391.png"
 
  },
  {
    id:2,
    title: "Tomahawk ", 
    description: "Barbeque type",
    weight:"350 grs", 
    price: 2000,
    imgProduct: "http://cdn.shopify.com/s/files/1/0446/4348/3811/products/DISTRIBUIDORA_QUIALITE_MARKET_CORTES_FINOS_NACIONALES_TOMAHAWK.jpg?v=1633830898"
 
  },
  {
    id:3,
    title: "T-Bone Meat", 
    description: "Barbeque type",
    weight:"300 grs", 
    price: 2500,
    imgProduct: "https://s.cornershopapp.com/product-images/2011172.jpg?versionId=g54kTgoSVSHteEgBokoguqSnjAA0BhHE"
 
  },
  {
    id:4,
    title: "Raw Turkey Meat", 
    description: "Sliced raw",
    weight:"250 grs", 
    price: 2100,
    imgProduct: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX32406216.jpg"
 
  },
  {
    id:5,
    title: "Raw Duck Meat", 
    description: "Sliced raw",
    weight:"200 grs", 
    price: 1800,
    imgProduct: 'https://static3.bigstockphoto.com/6/0/4/large1500/406679735.jpg',
  },
  {
    id:6,
    title: "Trout with Skin", 
    description: "stalk",
    weight:"220 grs", 
    price: 2100,
    imgProduct: "https://cdn.shopify.com/s/files/1/0497/1659/2805/products/truchafresca_1274x.png?v=1628023467"
 
  },
  {
    id:7,
    title: "Sea Food Mix ", 
    description: "MS Mix",
    weight:"500 grs", 
    price: 3000,
    imgProduct: "https://thumbs.dreamstime.com/b/raw-mixed-seafood-selective-focus-35639833.jpg"
 
  },
  
  ];
  

export const getProduct = () =>{
    return new Promise ((resolve,reject) => {

      setTimeout(() => resolve(PRODUCT),2000);

    });
  };