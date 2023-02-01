import { useState } from "react";
import Dog from "../data/dog";
import Cat from "../data/cat";



const AddCard = () => {
    const [cardType, setcardType] = useState("cat");
    const [name,setName] = useState('');
    const [species, setSpecies] = useState('');
    const [favFoods, setFavFoods] = useState('');
    const [birthYear, setBirthYear] = useState('');
     
    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard = {
            name,species,favFoods,birthYear, cardType
        };
        console.log(cardType + ' ' + newCard);
        
    };
  return (
    <div className="form_addcard">
      <form  onSubmit={handleFormSubmit}  
        >
        <div className="form__conainer">
          <label className="form__label form__text">
            Add cat / dog card...
          </label>
        </div>
        <div className="form_container form__text">
          <label className="form__label">Select which card:</label>
          <select
            id="cardType"   
            onChange={(e) => setcardType(e.target.value)}    
            defaultValue="cat"
            className="form__input form__text"
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>

        <div className="form_container form__text">
          <label className="form__label">Name: </label>
          <input 
          className="form__input" 
          type="text" 
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form_container form__text">
          <label className="form__label">Species: </label>
          <input 
          className="form__input" 
          type="text" 
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className="form_container form__text">
          <label className="form__label">Favourite foods: </label>
          <input 
          className="form__input" 
          type="text" 
          value={favFoods}
          onChange={(e) => setFavFoods(e.target.value)}
          />
        </div>
        <div className="form_container form__text">
          <label className="form__label">Birth year:  </label>
          <input 
          className="form__input" 
          type="text" 
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
        
          <button
            type="submit"
            className="form__button form__text"
            onClick={AddCard}
          >Add card</button>
       
      </form>
    </div>
  );
};

export default AddCard;
