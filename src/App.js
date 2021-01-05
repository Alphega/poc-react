import Colors from './Style/Colors/Colors';
import { colors } from './Colors.json';

const App = () => {
    return (
        <div className="App">
            <h1>Couleurs </h1>  
            {colors.map(data => <Colors data={data} /> )}
        </div>
    );
}

export default App;
