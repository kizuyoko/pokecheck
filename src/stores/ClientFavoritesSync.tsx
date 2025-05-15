'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export const FavoritesSync = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return null;
};
