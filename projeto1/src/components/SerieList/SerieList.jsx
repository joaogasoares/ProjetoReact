import React from 'react';
import './SerieList.css'; 

const SerieList = ({ series, onDelete, onEditStart }) => {

  const handleEditClick = (serieId) => {
    onEditStart(serieId); 
  };

  return (
    <div className="list-container serie-list">
      <h2>Lista de Séries</h2>
      
      {series && series.length > 0 ? (
        <div className="series-grid">
          {series.map((serie) => (
            <div key={serie.id} className="serie-card">
              
              <div className="card-header">
                <h3>{serie.titulo}</h3>
              </div>
              
              <div className="card-body">
                <p><strong>Temporadas:</strong> {serie.nTemporadas}</p>
                <p><strong>Lançamento:</strong> {serie.dataLancamento}</p>
                <p><strong>Diretor:</strong> {serie.diretor}</p>
                <p><strong>Produtora:</strong> {serie.produtora}</p>
                <p><strong>Categoria:</strong> {serie.categoria}</p>
                <p><strong>Assistiu em:</strong> {serie.dataAssistiu}</p>
              </div>
              
              <div className="card-actions">
                <button 
                    className="btn-edit" 
                    onClick={() => handleEditClick(serie.id)}
                    title="Editar Série" 
                >
                    ✏️
                </button>
                <button 
                    className="btn-delete" 
                    onClick={() => onDelete(serie.id)}
                    title="Excluir Série" 
                >
                    🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-list-message">
          Nenhuma série cadastrada.
        </div>
      )}
    </div>
  );
};

export default SerieList;