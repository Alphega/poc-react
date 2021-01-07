import { useState, useEffect } from 'react';
import useThemeMap from '../../api/ThemeMapperAPI';
import Colors from './Colors';
import Select from "@material-ui/core/Select/Select";

const colorMapRef = [
    "$COLOR_DARK",
    "$COLOR_LIGHT",
    "$COLOR_GREY_4",
    "$COLOR_GREY_5",
];

export default function AllColors() {
    const [colors, setcolors] = useState([]);
    const [currentTheme, setCurrentTheme] = useState('T1');

    const { getThemes } = useThemeMap();

    useEffect(() => {
        const fetchData = async () => {
            const tRaw = (await getThemes()).find(t => t.id === currentTheme).style;
            const colorMap = [];
            Object.keys(tRaw).forEach((token) => {
                if (colorMapRef.includes(token)) {
                    colorMap.push({ title: token, background: tRaw[token], themeId: currentTheme });
                }
            });
            setcolors(colorMap);
        };

        fetchData();
    }, [currentTheme]);


    return (
        <div className="AllColors">
            <Select
                native
                value={currentTheme}
                onChange={(e) => setCurrentTheme(e.target.value)}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
            >
                <option value={'T1'}>Theme 1</option>
                <option value={'T2'}>Theme 2</option>
            </Select>

            <h1>Couleurs </h1>
            {colors.map(data => <Colors data={data} /> )}
        </div>
    );
};
