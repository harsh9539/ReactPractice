import React, { useContext } from 'react'
import { useTheme,useThemeUpdate } from './DataContext';
const FunctionalComp = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const styled = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }


    return (
        <>
            <button onClick={toggleTheme}>toggleTheme</button>
            <div style={styled}>
                Function Theme
            </div>
        </>
    )
}

export default FunctionalComp
