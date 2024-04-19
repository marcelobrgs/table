import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {
  
  const url =   "https://jsonplaceholder.typicode.com/users";
  
  const  {data, isLoading, errors } = useFetch(url)
  
  return (
    <>
      <h1>Lista de usuários</h1>
      {
        isLoading 
          ? <h4>Carregando...</h4>
          : errors ? 
          <h1>Houve um erro : {errors}</h1>
          : <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => {
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
  );
};
