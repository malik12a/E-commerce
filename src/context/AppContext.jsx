import { createContext, useContext, useEffect, useState } from "react";
import { allProducts, dummyProducts } from "../assets/assets";

// Create the context
export const AppContext = createContext(null);

// Context provider component
export const AppContextProvider = ({ children }) => {
  const [products1,setProducts1] = useState([]);
   const [product,setProduct] = useState([]);
    const [cartItems,setCartItems] = useState({});
    const [savedItems, setSavedItems] = useState([]);
  //fetch all products
  const fetchProducts1 = async()=>{
    setProducts1(dummyProducts)
  }

// Save item for later
const saveForLater = (item) => {
  if (!savedItems.find((i) => i._id === item._id)) {
    setSavedItems([...savedItems, item]);
  }
};

// Remove from saved items (optional)
const removeSavedItem = (id) => {
  setSavedItems(savedItems.filter(item => item._id !== id));
};


// AppContext.jsx
const addToCart = (product, quantity = 1) => {
  setCartItems((prev) => {
    const existingItem = prev[product._id];

    return {
      ...prev,
      [product._id]: {
        product,
        quantity: existingItem ? existingItem.quantity + quantity : quantity,
      },
    };
  });

  // Optional: Remove item from saved list if it's there
  setSavedItems((prev) => prev.filter((item) => item._id !== product._id));
};   

  const removeFromCart = (productId) => {
  setCartItems((prev) => {
    const newCart = { ...prev };
    delete newCart[productId];
    return newCart;
  });
};

const updateCartQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) return;
  setCartItems((prev) => ({
    ...prev,
    [productId]: {
      ...prev[productId],
      quantity: newQuantity,
    },
  }));
};


  useEffect(()=>{
    fetchProducts1()
  },[])

  const fetchProducts = async()=>{
    setProduct(allProducts)
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  const value = {
  product,
  setProduct,
  products1,
  cartItems, // ✅ Add this line
  addToCart,
  removeFromCart,
  updateCartQuantity,
  savedItems,
  saveForLater,
  removeSavedItem,
};
 

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
