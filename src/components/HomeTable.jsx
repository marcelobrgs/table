import useFetchHook from "../hooks/useFetchHook"

export function HomeTable(){
    const {data,loading,error} = useFetchHook('https://jsonplaceholder.typicode.com/users')

        if(error){
           console.log(error)
        }

   return(
    <>
        <h5>👔 Acessando JsonPlaceholder</h5>
        <p>https://jsonplaceholder.typicode.com/users</p>
        <hr></hr>
        <h1>💎 Lista de usuarios</h1>
        <p>Exemplo de tabela utilizando Tailwind:</p>
        <hr></hr>
        {
        loading 
          ? <h4>Carregando...</h4>
          : error ? 
          <h1>Houve um erro : {errors}</h1>
          :<table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
      </table>       
      }    
    </>
    

   )
          
             
        
    
}