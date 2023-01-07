import React, { useCallback } from 'react'
import './App.css'
import Card from '../../components/Card';
import {useFetchRepos} from '../../queries/repos';
import useFavoriteRepoStore from '../../store/useFavoriteRepos';

const Home: React.FC = () => {
  const {data} = useFetchRepos('jackomo007');

  const favoriteRepoIds = useFavoriteRepoStore((state) => state.favoriteRepoIds);
  const addToFavorites = useFavoriteRepoStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepoStore((state) => state.removeFromFavorites);

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorites(repoId);
  }, []);

  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorites(repoId);
  }, []);

  
  return ( 
    <>
      {
        data?.map((repo) => ( <Card
          key={repo.id}
          repo={repo}
          addToFavorites={handleAddToFavorites}
          removeFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />))
      }
    </>
  )
}

export default Home
