import React from 'react'
import PropTypes from 'prop-types';

const Nota = ({titulo, texto, onClickNota, i}) => (
  <div className="col-lg-3">
    <div className="card">
      <div className="card-header">
        {titulo}
        <button type="button" className="close" onClick={()=>onClickNota(i)}>
          <span>&times;</span>
        </button>
      </div>
      <div className="card-body">
        {texto}
      </div>
    </div>
  </div>
)

Nota.propTypes = {
	titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  onClickNota: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
}

export default Nota
