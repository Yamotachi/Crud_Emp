import React, { useEffect, useState } from 'react';
import empresaService from "../../services/Empresa";

function Form(){

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

  useEffect(()=>{

    async function fetchDataEmpresa() {
      const res = await empresaService.list();
      setEmpresa(res.data);
    }

    fetchDataEmpresa();

  }, [])

  const saveEmpresa = async() => {
    const data = {
      nome,
      endnumero,
      complemento,
      logradouro,
      cep,
      bairronome,
      cidade,
      telefone, 
      // email,
      // password,
    }
    const res = await empresaService.save(data);

    if (res.success) {
      alert(res.message)
    } else {
      alert(res.message)
    }
  }

  return(
    <div>
      <div className="row">
        <div className="col-md-6">
          <label><b>Dados gerais:</b></label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Nome da empresa</label>
          <input type="text" className="form-control" placeholder="Nome" 
          onChange={(event)=>setNome(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email de acesso</label>
          <input type="email" className="form-control" placeholder="Email" 
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="pass">Senha de acesso</label>
          <input type="password" className="form-control" placeholder="Senha" 
          onChange={(event)=>setPassword(event.target.value)}/>
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
          <input type="text" className="form-control" placeholder="CEP"
            onChange={(event)=>setCep(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Rua</label>
          <input type="text" className="form-control" placeholder="Rua"
            onChange={(event)=>setLogradouro(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Número</label>
          <input type="text" className="form-control" placeholder="Número"
            onChange={(event)=>setEndNumero(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Complemento</label>
          <input type="text" className="form-control" placeholder="Complemento"
            onChange={(event)=>setComplemento(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Bairro</label>
          <input type="text" className="form-control" placeholder="Bairro"
            onChange={(event)=>setBairroNome(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Cidade</label>
          <input type="text" className="form-control" placeholder="Cidade"
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
          <input type="text" className="form-control" placeholder="(00) 00000-0000" 
          onChange={(event)=>setTelefone(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit"
          onClick={()=>saveEmpresa()}>Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default Form;