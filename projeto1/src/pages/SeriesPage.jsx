import React, { useState } from 'react';
import SerieList from '../components/SerieList/SerieList';
import SerieForm from '../components/SerieForm/SerieForm'; 
import { useLocation } from 'react-router-dom'; 

const initialSeriesData = [
  { id: 1, titulo: "Mock Serie 1", nTemporadas: 3, dataLancamento: "2019-11-12", diretor: "Mock diretor 1", produtora: "Mock produtora 1", categoria: "Ficção Científica", dataAssistiu: "2023-08-01" },
  { id: 2, titulo: "Mock Serie 2", nTemporadas: 4, dataLancamento: "2016-07-15", diretor: "Mock diretor 2", produtora: "Mock produtora 2", categoria: "Mistério", dataAssistiu: "2023-10-20" },
];

let nextId = initialSeriesData.length + 1;

const SeriesPage = () => {
    // O estado central agora fica aqui
    const [series, setSeries] = useState(initialSeriesData);
    const [editingSerie, setEditingSerie] = useState(null);
    const location = useLocation();

    const handleAddSerie = (newSerieData) => {
        const newSerie = {
            ...newSerieData,
            id: nextId++,
        };
        setSeries(prevSeries => [...prevSeries, newSerie]);
        alert(`Série "${newSerie.titulo}" adicionada com sucesso!`);
    };


    const handleDelete = (idToDelete) => {
        const title = series.find(s => s.id === idToDelete)?.titulo || 'Série';
        setSeries(prevSeries => prevSeries.filter(serie => serie.id !== idToDelete));
        alert(`Série "${title}" excluída!`);
    };

    const handleEditStart = (idToEdit) => {
        const serieToEdit = series.find(s => s.id === idToEdit);
        setEditingSerie(serieToEdit); 
    };

    const handleUpdateSerie = (updatedData) => {
        setSeries(prevSeries => prevSeries.map(serie => 
            serie.id === updatedData.id ? updatedData : serie
        ));
        setEditingSerie(null); 
        alert(`Série "${updatedData.titulo}" atualizada com sucesso!`);
    };

    const renderContent = () => {
        if (location.pathname === '/cadastrar') {
             return (
                <SerieForm 
                    onSubmit={editingSerie ? handleUpdateSerie : handleAddSerie}
                    initialData={editingSerie}
                    setEditingSerie={setEditingSerie} 
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
    }
    
    return (
        <div style={{ padding: '20px' }}>
            {renderContent()}
        </div>
    );
};
export default SeriesPage;