import { useState, useEffect } from 'react';
import Colors from './Style/Colors/Colors';
import useThemeMap from './api/ThemeMapperAPI';


export default function App() {
    const [colors, setcolors] = useState([1]);
    const [getThemes] = useThemeMap();

    useEffect(() => {
        const fetchData = async () => {
            const t1 = (await getThemes())[0].style.colors;
            const colorMap = Object.keys(t1).map(entry => ({ title: entry, background: t1[entry] }));
            setcolors(colorMap);
        };

        fetchData();
    }, []);


    console.warn('×', colors);
    return (
        <div className="App">
            <h1>Couleurs </h1>
            {colors.map(data => <Colors data={data} /> )}
        </div>
    );
};
