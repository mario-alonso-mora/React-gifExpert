import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //para capturar el evento
  // event.target.value
  // lo podemos desestructurar para simplificarlo
  // {target}

  const onInputChange = ({ target }) => {
    //console.log(target.value)
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // asi se evita el refresh del navegador

    if (inputValue.trim().length <= 1) return;

   
    //setCategories(categories => [inputValue,...categories])

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    // aqui no creamos un fragmento por que solo tiene un form
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
