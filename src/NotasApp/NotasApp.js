import React, {Component, Fragment} from 'react'
import NotaList from './NotaList'

class NotasApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: [],
      titulo:'',
      texto: ''
    };
  }

  handleChangeTitulo = event => {
    this.setState({ titulo: event.target.value })
  }

  handleChangeTexto = event => {
    this.setState({ texto: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {titulo, texto, notas} = this.state
    if (!texto.length) {
      alert('Debes escribir un texto');
      return;
    }
    const tituloNota = (!titulo.length)?'Sin titulo':titulo
    const nuevaNota = {
      titulo: tituloNota,
      texto: texto
    };
    this.setState(() => ({
      notas: [...notas, nuevaNota],
      titulo: '',
      texto: '',
    }));
  }

  handleOnClickDelete = (event, nota) => {
    const {notas} = this.state
    const indexNota = notas.indexOf(nota)
    const notasAntes = notas.slice(0,indexNota)
    const notasDespues = notas.slice(indexNota+1, notas.length)
    this.setState(() => ({
      notas: [...notasAntes, ...notasDespues],
      titulo: '',
      texto: '',
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>Mis notas</h1>
        </div>
        <div className="row justify-content-center">

          <form className="col-lg-4" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Titulo (opcional)"
                onChange={this.handleChangeTitulo}
                value={this.state.titulo}
              />
              <textarea
                className="form-control"
                placeholder="Escribe una nota (obligatorio)"
                onChange={this.handleChangeTexto}
                value={this.state.texto}
              />
              <input className="form-control btn btn-primary" type="submit" value="GUARDAR NOTA"/>
            </div>
          </form>
        </div>

        <div className="row">
          <NotaList notas={this.state.notas} onClickDelete={this.handleOnClickDelete}/>
        </div>

      </div>
    );
  }

}

export default NotasApp;
