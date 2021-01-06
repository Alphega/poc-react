import { colors } from '../../Colors.json';
import Colors from './Colors';

const AllColors = () => {
    return (
        <div className="App">
            <h1>Couleurs </h1>  
            {colors.map(data => <Colors data={data} /> )}
        </div>
    );
}

export default AllColors;
