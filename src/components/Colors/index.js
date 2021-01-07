import { useState, useEffect } from 'react';
import useThemeMap from '../../api/ThemeMapperAPI';
import Colors from './Colors';

const colorMapRef = [
    "$COLOR_DARK",
    "$COLOR_LIGHT",
    "$COLOR_GREY_4",
    "$COLOR_GREY_5",
];

export default function AllColors() {
    const [colors, setcolors] = useState([1]);
    const [getThemes] = useThemeMap();

    useEffect(() => {
        const fetchData = async () => {
            const tRaw = (await getThemes())[0].style;
            const colorMap = [];
            Object.keys(tRaw).forEach((token) => {
                if (colorMapRef.includes(token)) {
                    colorMap.push({ title: token, background: tRaw[token], themeId: 'T1' });
                }
            });
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
