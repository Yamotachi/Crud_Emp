import React, { useEffect, useState } from 'react';
import empresaService from "../../services/Empresa";
import { Link } from 'react-router-dom';

function List(){

  const [ listEmpresa, setListEmpresa ] = useState([]);

  useEffect(() => {
    async function fetchDataEmpresa() {
      const res = await empresaService.listEmpresa();
      setListEmpresa(res.data);
    }

    fetchDataEmpresa();

  }, [])

  const onClickDelete = async (i, id) => {

    var yes = confirm("Tem certeza que deseja deletar esta empresa?");
    if (yes === true){

      const res = await empresaService.delete(id)

      if (res.success) {
        alert(res.message) 
        const newEmpresa = listEmpresa
        newList.splice(i, 1)
        setListEmpresa(newEmpresa);
      } else {
        alert(res.message);
      }
      window.location.reload(true);
    } 
  }

  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Favorito</th>
            <th scope="col">Empresa</th>
            <th scope="col">Endereço</th>
            <th scope="col">Contato</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            listEmpresa.map((item, i) => {
              return (
                <tr key={item.emp_id_emp}>
                  <th scope="row">{i}</th>
                  <td>{item.emp_nom_empresa}</td>
                  <td>{item.logradouro}, {item.endnumero}, {item.complemento}, {item.bairronome}, {item.cidade}</td>
                  <td>{item.telefone}</td>
                  <td>
                    <Link to={"/empresa/edit/"+item.emp_id_emp} className="btn btn-light"> Editar </Link>
                    <a href="#" className="btn btn-danger" onClick={() => onClickDelete(i, item.emp_id_emp)}> Deletar usuário </a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default List;