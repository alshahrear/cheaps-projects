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

  const handleAddRecipes = (recipeId, recipe) => {
  
    if (selectedRecipes.some(r => r.recipe_id === recipeId)) {
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
      
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="flex mb-16 ">
        <div className='pr-12  '><Cards handleAddRecipes={handleAddRecipes} /></div>
        <div className='mr-16 ml-10'><Cook selectedRecipes={selectedRecipes} /></div>
      </div>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
