import React from 'react'
import Nota from './Nota'
import PropTypes from 'prop-types';

const NotaList = ({notas, onClickNota}) =>
  notas.map((nota, i)=> (
    <Nota
      key={i}
      titulo={nota.titulo}
      texto={nota.texto}
      i={i}
      onClickNota={onClickNota}
    />)
  )

NotaList.propTypes = {
	notas: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string,
    texto: PropTypes.string
  })).isRequired,
  onClickNota: PropTypes.func.isRequired
}


export default NotaList
