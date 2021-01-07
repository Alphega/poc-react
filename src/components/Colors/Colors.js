import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import useTokenApi from '../../api/TokenAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function useColorPicker(initial) {
  const [togglePicker, setTogglePicker] = useState(initial);
  const { setSingleToken } = useTokenApi();

  function onPickerChange(tile) {
    if (!tile.disabled) {
      setTogglePicker(!togglePicker);

      // send request through API on closing color picker
      if (togglePicker) {
        console.log('[APP] send to API');
        setSingleToken(tile);
      }
    }
  }

  return [togglePicker, onPickerChange];
}

export default function Colors({ data }) {
    const classes = useStyles();
    const [bg, setBg] = useState(data.background);
    const [togglePicker, onPickerChange] = useColorPicker(false);

    useEffect(() => {
        setBg(data.background);
    }, [data]);

    return (
      <div className={ classes.root }>
        <Box bgcolor={bg} onClick={
            () => onPickerChange({
                key: data.title,
                value: bg,
                disabled: data.disabled,
                themeId: data.themeId
            }) }>
          <h6>{data.title}</h6>
        </Box>
        { togglePicker && (
          <ChromePicker
           color={ bg }
           onChange={ ({ hex }) => setBg(hex) }
          />
        )}
      </div>
    );
};
