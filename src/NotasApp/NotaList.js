import React from 'react'
import Nota from './Nota'
import PropTypes from 'prop-types';

const NotaList = ({notas, onClickDelete}) =>
  notas.map((nota, i)=> (
    <Nota
      key={i}
      titulo={nota.titulo}
      texto={nota.texto}
      onClickDelete={() => onClickDelete(nota)}
    />)
  )

NotaList.propTypes = {
	notas: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string,
    texto: PropTypes.string
  })).isRequired,
  onClickDelete: PropTypes.func.isRequired
}


export default NotaList
