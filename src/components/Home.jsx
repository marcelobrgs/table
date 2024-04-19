import useFetchHook from "../hooks/useFetchHook"

export function Home(){
    const {data,loading,error} = useFetchHook('https://jsonplaceholder.typicode.com/users')

        if(error){
           console.log(error)
        }

   return(
    <>
        <h1>Lista de usuarios</h1>
        <hr></hr>
        
        {
        loading 
          ? <h4>Carregando...</h4>
          : error ? 
          <h1>Houve um erro : {errors}</h1>
          :<ul>
            { data && data.map(
                        (item)=>
                        {
                            return (
                                <li key={item.id}>🥇{item.name} , ✉ {item.email} , 🖥 {item.website}</li>
                            )
                        }
                )
            }

          </ul>          
      }    
    </>
    

   )
          
             
        
    
}