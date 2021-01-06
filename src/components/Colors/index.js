import { useState, useEffect } from 'react';
import useThemeMap from '../../api/ThemeMapperAPI';
import Colors from './Colors';

export default function AllColors() {
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

    return (
        <div className="AllColors">
            <h1>Couleurs </h1>
            {colors.map(data => <Colors data={data} /> )}
        </div>
    );
};
