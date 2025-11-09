import React, { useState, useEffect } from 'react';
import './SerieForm.css';

const SerieForm = ({ onSubmit, initialData, setEditingSerie }) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || null, 
    titulo: initialData?.titulo || '',
    nTemporadas: initialData?.nTemporadas || '',
    dataLancamento: initialData?.dataLancamento || '',
    diretor: initialData?.diretor || '',
    produtora: initialData?.produtora || '',
    categoria: initialData?.categoria || '',
    dataAssistiu: initialData?.dataAssistiu || '',
  });
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setFeedback(null);
    } else {
      setFormData({
        id: null, titulo: '', nTemporadas: '', dataLancamento: '',
        diretor: '', produtora: '', categoria: '', dataAssistiu: '',
      });
    }
  }, [initialData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.titulo || !formData.nTemporadas || !formData.dataAssistiu) {
      setFeedback({ type: 'error', message: 'Título, Número de Temporadas e Data em que assistiu são obrigatórios!' });
      return false;
    }
    setFeedback(null);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData); 
      
      if (!initialData) {
         setFormData({
            id: null, titulo: '', nTemporadas: '', dataLancamento: '',
            diretor: '', produtora: '', categoria: '', dataAssistiu: '',
        });
      }
    }
  };
  
  const handleCancel = () => {
    if (setEditingSerie) {
      setEditingSerie(null); 
    }
  };

  const isEditing = !!initialData;

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Editar Série' : 'Cadastro de Nova Série'}</h2>
      {feedback && (
        <div className={`feedback feedback-${feedback.type}`}>
          {feedback.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="serie-form">
        
        <label htmlFor="titulo">Título *</label>
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required />
        <label htmlFor="nTemporadas">Nº de Temporadas *</label>
        <input type="number" id="nTemporadas" name="nTemporadas" value={formData.nTemporadas} onChange={handleChange} required min="1" />
        <label htmlFor="dataLancamento">Data de Lançamento da Temporada</label>
        <input type="date" id="dataLancamento" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} />
        <label htmlFor="diretor">Diretor</label>
        <input type="text" id="diretor" name="diretor" value={formData.diretor} onChange={handleChange} />
        <label htmlFor="produtora">Produtora</label>
        <input type="text" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange} />
        <label htmlFor="categoria">Categoria</label>
        <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} />
        <label htmlFor="dataAssistiu">Data em que assistiu *</label>
        <input type="date" id="dataAssistiu" name="dataAssistiu" value={formData.dataAssistiu} onChange={handleChange} required />
        {/* ----------------------------------------------- */}

        <button type="submit">{isEditing ? 'Salvar Edição' : 'Cadastrar'}</button>
        {isEditing && (
            <button type="button" onClick={handleCancel} className="btn-cancel">
                Cancelar Edição
            </button>
        )}
      </form>
    </div>
  );
};

export default SerieForm;