import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import Dog from "./data/dog";
import CatCard from "./components/cat_card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import AddCard from "./components/submitForm";

function App() {
  // JavaScript/TypeScript code can be inserted here!
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  
  cats.forEach((cat, index) => {
    const id = uuidv4();
    cat.id = id;
  });
  dogs.forEach((dog, index) => {
    const id = uuidv4();
    dog.id = id;
  });

  console.log(dogs);
  const catCount = cats.length;
  const dogCount = dogs.length;

  return (  
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount}  />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogs.map((dog, index) => (
            <CatCard
            key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
            />
          ))}
        </div>
        <AddCard  />
        
      </main>
      
      <Footer />    
    </>
  );
}

export default App;
