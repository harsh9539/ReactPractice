import React, { useContext, useState } from 'react'
const DataContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export function useTheme() {
    return useContext(DataContext);
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}
const DataProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <div style={{ padding: 50 }}>
            <DataContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </DataContext.Provider>
        </div>
    )
}
export default DataProvider
