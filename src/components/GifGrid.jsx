import { useFetchGifs } from "../helpers/hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

    {
      isLoading && (<h2>Cargando</h2>) 

    }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            // title={image.title}
            // url={image.url}

            // con el spread operator podemos espacir todas las propiedas
            // del objeto que estemos recorriendo, de esta manera
            {...image}
          />
        ))}
      </div>
    </>
  );
};
