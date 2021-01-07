import { useState, useEffect } from 'react';
import Colors from '../Colors/Colors';
import useThemeMap from '../../api/ThemeMapperAPI';
import useCustomerApi from '../../api/CustomerApi';
import Select from '@material-ui/core/Select';


const Theme = () => {

  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState();

  const [themes, setThemes] = useState([1]);
  const { getThemes, updateCustomerTheme }= useThemeMap();

    const { getCustomers } = useCustomerApi();
    useEffect(() => {
      const fetchData = async () => {
          const tRaw = (await getThemes());
          setThemes(tRaw);
      };

      const fetchCustomers = async () => {
          const customerList = await getCustomers();
          setCustomers(customerList);
          (customerList.length) && setCurrentCustomer(customerList[0].cpe);
      };

      fetchData();
      fetchCustomers();
    }, []);

    const uploadTheme = (t) => {
        if (currentCustomer) {
            updateCustomerTheme({cpe: currentCustomer, id: t.id});
        }
  };

  return (
    <div className="Theme">
        <Select
            native
            value={currentCustomer}
            onChange={(e) => setCurrentCustomer(e.target.value)}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}
        >
            <option aria-label="None" value="" />
            {customers.map((customer) => (
                <option value={customer.cpe}>{customer.cpe}</option>
                ))
            }
        </Select>
        {themes.map((theme) => {
            const tcolors = theme && theme.style && theme.style;
            if (tcolors) {
                const colorMap = Object.keys(tcolors).map(entry => ({
                    title: entry,
                    background: tcolors[entry],
                    disabled: true,
                    themeId: theme.id
                }));

                return (
                    <div onClick={ () => uploadTheme(theme) }>
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
