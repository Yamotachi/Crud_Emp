import React, { useEffect, useState } from 'react';
import empresaService from "../../services/Empresa";

function Edit(props){

  const [ nome, setNome ] = useState("");
  const [ cep, setCep ] = useState("");
  const [ logradouro, setLogradouro ] = useState("");
  const [ endnumero, setEndNumero ] = useState("");
  const [ complemento, setComplemento ] = useState("");
  const [ bairronome, setBairroNome ] = useState("");
  const [ cidade, setCidade ] = useState("");
  const [ telefone, setTelefone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [ listTipoDoc, setTipoDoc ] = useState([]);

  useEffect(() => {
    
    async function fetchDataEmpresa() {

      let id = props.match.params.id;
      const res = await empresaService.get(emp_id_emp);

      if (res.success) {
        console.log(res.data);
        const data = res.data
        setId(data.emp_id_emp)
        setNome(data.emp_nom_empresa)
        setCep(data.log_num_cep)
        setLogradouro(data.log_nom_logradouro)
        setEndNumero(data.end_num_numero)
        setCidade(data.end_cidade)
        setTelefone(data.emp_telefone)
      } else {
        alert(res.message)
      }
    }

    fetchDataEmpresa();

    async function fetchDataTipoDoc() {
      const res = await empresaService.list();
      setListTipoDoc(res.data);
    }

    fetchDataTipoDoc();

  }, [])

  const updateEmpresa = async () => {
    const data = {
      nome,
      cep,
      logradouro,
      endnumero,
      complemento,
      bairronome,
      cidade,
      telefone,
      // email,
      // password
    }

    const res = await empresaService.update(data);

    if (res.success) {
      alert(res.message)
    } else {
      alert(res.message)
    }

  }
  
  return (
    <div>
      <h4>Editar usuário</h4>
      <div className="row">
        <div className="col-md-6">
          <label><b>Dados gerais:</b></label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Nome da empresa</label>
          <input type="text" className="form-control" value={nome} placeholder="Nome" 
          onChange={(event)=>setNome(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email de acesso</label>
          <input type="email" className="form-control" value={email} placeholder="Email" 
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
            <p><b>Documentos da empresa:</b></p>
            <label for="image">Alvará:</label>
            <input type="file" id="image" name="image" class="form-control-file"/><br></br>
            <label for="image">CNPJ:</label>
            <input type="file" id="image" name="image" class="form-control-file"/><br></br>
            <label for="image">Inscrição estadual e municipal:</label>
            <input type="file" id="image" name="image" class="form-control-file"/><br></br>
            <label for="image">Cadastro Geral de Empregados e Desempregados:</label>
            <input type="file" id="image" name="image" class="form-control-file"/><br></br>
            <label for="image">Guias:</label>
            <input type="file" id="image" name="image" class="form-control-file"/><br></br>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label><b>Localização da empresa:</b></label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">CEP</label>
          <input type="text" className="form-control" value={cep} placeholder="CEP"
            onChange={(event)=>setCep(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Rua</label>
          <input type="text" className="form-control" value={logradouro} placeholder="Rua"
            onChange={(event)=>setLogradouro(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Número</label>
          <input type="text" className="form-control" value={endnumero} placeholder="Número"
            onChange={(event)=>setEndNumero(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Complemento</label>
          <input type="text" className="form-control" value={complemento} placeholder="Complemento"
            onChange={(event)=>setComplemento(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Bairro</label>
          <input type="text" className="form-control" value={bairronome} placeholder="Bairro"
            onChange={(event)=>setBairroNome(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Cidade</label>
          <input type="text" className="form-control" value={cidade} placeholder="Cidade"
            onChange={(event)=>setCidade(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label><b>Contato:</b></label>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Telefone</label>
          <input type="text" className="form-control" value={telefone} placeholder="(00) 00000-0000" 
          onChange={(event)=>setTelefone(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit"
          onClick={()=>updateEmpresa()}>Salvar</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;