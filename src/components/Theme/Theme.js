import { useState, useEffect } from 'react';
import useThemeMap from '../../api/ThemeMapperAPI';
import Colors from '../Colors/Colors';


const Theme = () => {

  const [themes, setThemes] = useState([1]);
  const [getThemes] = useThemeMap();

  useEffect(() => {
      console.log('mescouilles');
      const fetchData = async () => {

          const ts = await getThemes();
          console.log('ts',ts);
          setThemes(ts);
      };

      fetchData();
  }, []);
  
  return (
    <div className="Theme">

        {themes.map((theme) => { 
            const tcolors = theme && theme.style && theme.style.colors;
            if (tcolors) {
                const colorMap = Object.keys(tcolors).map(entry => ({ title: entry, background: tcolors[entry], disabled: true }));
                
                return (
                    <div>
                        <h1>Theme {theme.id}</h1> 
                        {colorMap.map(data => <Colors data={data} /> )}
                    </div>
                    )
            }        
        })}
        
    </div>
);

};
export default Theme;
