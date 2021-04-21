import { createContext } from 'react';

const PreferencesContext = createContext({
    userPreferences: {
        removeAds: false,
    },
    setUserPreferences: ({ removeAds }: IUserPreferences) => {},
});

export default PreferencesContext;
