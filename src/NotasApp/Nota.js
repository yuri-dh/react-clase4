import React from 'react'
import PropTypes from 'prop-types';

const Nota = ({titulo, texto, onClickDelete}) => (
  <div className="col-lg-3">
    <div className="card">
      <div className="card-header">
        {titulo}
        <button type="button" className="close" onClick={onClickDelete}>
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
  onClickDelete: PropTypes.func.isRequired,
}

export default Nota
