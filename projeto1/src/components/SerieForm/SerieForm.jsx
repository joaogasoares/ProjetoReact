import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SerieForm.css';

const emptyForm = {
    id: null,
    titulo: '',
    nTemporadas: '',
    dataLancamento: '',
    diretor: '',
    produtora: '',
    categoria: '',
    dataAssistiu: '',
};

const SerieForm = ({ onSubmit, initialData, setEditingSerie }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData || emptyForm);
    const [feedback, setFeedback] = useState(null);
    const isEditing = !!initialData;

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData(emptyForm);
        }
        setFeedback(null);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.titulo || 
            !formData.nTemporadas || 
            !formData.dataAssistiu ||
            !formData.dataLancamento ||
            !formData.diretor ||
            !formData.produtora ||
            !formData.categoria) 
        {
            setFeedback({ 
                type: 'error', 
                message: 'Todos os campos com (*) são obrigatórios!' 
            });
            return false;
        }
        
        if (formData.nTemporadas <= 0) {
            setFeedback({ type: 'error', message: 'O Número de Temporadas deve ser maior que zero.' });
            return false;
        }
        
        setFeedback(null);
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            await onSubmit(formData); 
            
            if (!isEditing) {
                setFormData(emptyForm);
                setFeedback({ type: 'success', message: `Série "${formData.titulo}" cadastrada com sucesso!` });
            } else {
                navigate('/listar'); 
            }

            setEditingSerie(null);
        }
    };
    
    const handleCancel = () => {
        if (setEditingSerie) {
            setEditingSerie(null); 
        }
        navigate('/listar');
    };

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
                <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} />
        
                <label htmlFor="nTemporadas">Nº de Temporadas *</label>
                <input type="number" id="nTemporadas" name="nTemporadas" value={formData.nTemporadas} onChange={handleChange} min="1" />
                
                <label htmlFor="dataLancamento">Data de Lançamento da Temporada *</label>
                <input type="date" id="dataLancamento" name="dataLancamento" value={formData.dataLancamento} onChange={handleChange} />
        
                <label htmlFor="diretor">Diretor *</label>
                <input type="text" id="diretor" name="diretor" value={formData.diretor} onChange={handleChange} />
        
                <label htmlFor="produtora">Produtora *</label>
                <input type="text" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange} />
        
                <label htmlFor="categoria">Categoria *</label>
                <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} />
        
                <label htmlFor="dataAssistiu">Data em que assistiu *</label>
                <input type="date" id="dataAssistiu" name="dataAssistiu" value={formData.dataAssistiu} onChange={handleChange} />
        
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
