import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default () => {
  const classes = useStyles();
  const [bg, setBg] = useState('#ff1122');
  const [displayCP, setDisplayCP] = useState(false);

  return (
    <div className={ classes.root }>
      <Box bgcolor={ bg } onClick={ () => setDisplayCP(!displayCP) } />
      { displayCP && (
        <ChromePicker
          color={ bg }
          onChange={ ({ hex }) => setBg(hex) }
        />
      )}

  </div>
  );
}
