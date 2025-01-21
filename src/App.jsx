import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Cards from './component/Cards/Cards';
import Cook from './component/Cook/Cook';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedRecipes, setSelectedRecipes] = useState([]); 

  const handleAddRecipes = (recipeId) => {
    if (selectedRecipes.includes(recipeId)) {
    
      toast.error("Already exists!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
     
      setSelectedRecipes([...selectedRecipes, recipeId]);
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="flex mb-16">
        <Cards handleAddRecipes={handleAddRecipes} />
        <Cook addRecipes={selectedRecipes.length} />
      </div>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
