import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    //validar que los nombres sean unicos

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    // Valorant
    ///spread operator para crear una copia de las categories
    // y despues se le agrega el nuevo dato que le querramos pasar

    //1ª forma
    //este es del ejercicio anterior para agregar un elemento al array
    //setCategories([...categories, "Valorant"]);

    //2ªForma
    //la segunda forma de implementarlo tambien
    // setCategories( categories => [...categories, "Valorant"]);
  };

  return (
    <>
      {/* titulo*/}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        //emitir un evento desde el padre
        onNewCategory={(value) => onAddCategory(value)}

        // setCategories={setCategories}
        //Mandar la funcion asi no esta mal pero oculta la implementacion del mismo
        //que seria un dolor de cabeza para otros desarrolladores
      />

      {/*Listado de gif*/}

      <ol>
        {
          categories.map((category) => (
            <GifGrid
             key={category}
            category={category}/>
          ))
        }
      </ol>

      {/* Gif Item*/}
    </>
  );
};
