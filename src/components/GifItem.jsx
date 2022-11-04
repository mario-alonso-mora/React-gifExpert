


export const GifItem = ({title,url,id}) => {

   

  return (
  
        <div className="card">
            <img className="card-fix" src={url} alt={title}/>
            <p>{title}</p>
        </div>



  )
}
