 export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7L2Jo4PtlCRqZ88MvtCnfiwI1jj1tY2K&q=${category}&limit=21`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url,
      };
    });
   
    return gifs;
  };