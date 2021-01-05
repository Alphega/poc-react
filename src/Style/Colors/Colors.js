import { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';

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

const Colors = ({ data }) => {
  const classes = useStyles();
  const [bg, setBg] = useState(data.background);
  const [displayCP, setDisplayCP] = useState(false);

  return (
    <div className={ classes.root }>
      <Box bgcolor={bg} onClick={ () => setDisplayCP(!displayCP) }>
        {<h6>{data.title}</h6>}
      </Box>
      { displayCP && (
        <ChromePicker
          color={ bg }
          onChange={ ({ hex }) => setBg(hex) }
        />
      )}

  </div>
  );
}

export default Colors;
