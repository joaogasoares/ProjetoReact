import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SerieList.css';

const SerieList = ({ series, onDelete, onEditStart }) => {
  const navigate = useNavigate();

  if (!series || series.length === 0) {
    return <p>Nenhuma série cadastrada ainda.</p>;
  }

  const handleEditClick = (serieId) => {
    onEditStart(serieId);
    navigate('/cadastrar');
  };

  return (
    <div className="list-container serie-list">
      <h2>Lista de Séries Cadastradas</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Temporadas</th>
            <th>Data Assistiu</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {series.map((serie) => (
            <tr key={serie.id}>
              <td>{serie.titulo}</td>
              <td>{serie.nTemporadas}</td>
              <td>{serie.dataAssistiu}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => handleEditClick(serie.id)}
                >
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(serie.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SerieList;
