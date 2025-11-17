import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api'; 
import SerieList from '../components/SerieList/SerieList';
import SerieForm from '../components/SerieForm/SerieForm';
import { CircularProgress, Box, Typography } from '@mui/material'; 

const SeriesPage = () => {
    const [series, setSeries] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [editingSerie, setEditingSerie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


    const fetchSeries = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.get('/series');
            setSeries(response.data);
        } catch (error) {
            console.error('Erro ao buscar séries:', error);
            alert('Não foi possível carregar as séries. Verifique se a API está rodando na porta 5000.');
            setSeries([]); 
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (location.pathname === '/listar') {
            fetchSeries();
        }
    }, [location.pathname, fetchSeries]); 

    const handleAddSerie = async (newSerieData) => {
        try {
            await api.post('/series', newSerieData);
            if (location.pathname === '/listar') {
                fetchSeries();
            }
            alert(`Série "${newSerieData.titulo}" cadastrada com sucesso!`);
        } catch (error) {
            console.error('Erro ao cadastrar série:', error);
            alert('Erro ao cadastrar série. Tente novamente.');
        }
    };

    const handleDelete = async (idToDelete) => {
        const title = series.find(s => s.id === idToDelete)?.titulo || 'Série';
        if (!window.confirm(`Tem certeza que deseja excluir a série "${title}"?`)) {
            return;
        }

        try {
            await api.delete(`/series/${idToDelete}`);
            setSeries(prevSeries => prevSeries.filter(serie => serie.id !== idToDelete));
            alert(`Série "${title}" excluída com sucesso!`);
        } catch (error) {
            console.error('Erro ao excluir série:', error);
            alert('Erro ao excluir série. Tente novamente.');
        }
    };

    const handleUpdateSerie = async (updatedData) => {
        try {
            await api.put('/series', updatedData); 
            setSeries(prevSeries => prevSeries.map(serie => 
                serie.id === updatedData.id ? updatedData : serie
            ));
            setEditingSerie(null); 
            alert(`Série "${updatedData.titulo}" atualizada com sucesso!`);
            navigate('/listar'); 
        } catch (error) {
            console.error('Erro ao atualizar série:', error);
            alert('Erro ao atualizar série. Tente novamente.');
        }
    };

    const handleEditStart = async (idToEdit) => {
        try {
            const response = await api.get(`/series/${idToEdit}`);
            setEditingSerie(response.data);
            navigate('/cadastrar'); 
        } catch (error) {
            console.error('Erro ao buscar série para edição:', error);
            alert('Não foi possível carregar os dados para edição.');
        }
    };

    const renderContent = () => {
        if (loading && location.pathname === '/listar') {
             return (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                    <CircularProgress />
                    <Typography sx={{ml: 2}}>Carregando Séries...</Typography>
                </Box>
             );
        }

        if (location.pathname === '/cadastrar') {
             return (
                <SerieForm 
                    onSubmit={editingSerie ? handleUpdateSerie : handleAddSerie}
                    initialData={editingSerie}
                    setEditingSerie={setEditingSerie}
                    isEditing={!!editingSerie} 
                />
            );
        } else if (location.pathname === '/listar') {
             return (
                <SerieList 
                    series={series} 
                    onDelete={handleDelete} 
                    onEditStart={handleEditStart} 
                />
            );
        }
        return <Typography>Página não encontrada ou rota inválida.</Typography>;
    }
    
    return (
        <Box sx={{ padding: '20px' }}>
            {renderContent()}
        </Box>
    );
};

export default SeriesPage;