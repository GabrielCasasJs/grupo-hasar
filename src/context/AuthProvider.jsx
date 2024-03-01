import {
    useState,
    useEffect,
} from 'react';

import { AuthProvider } from './AuthContext';

import { getData } from '../helpers/storageData';

const localKey = 'favorites';

function AppProviderContext({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = getData(localKey);
        if (storedFavorites) {
          setFavorites(storedFavorites);
        }
      }, []);

    return (
        <AuthProvider
            value={{
                favorites,
                setFavorites
            }}
        >
            {children}
        </AuthProvider>
    )
}

export default AppProviderContext;
