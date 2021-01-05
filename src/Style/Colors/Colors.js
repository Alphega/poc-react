import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';

const styles = makeStyles((theme) => ({
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

class Colors extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      displayColorPicker: false,
      defaultColor: props.background,
      background: props.background,
      title: props.title
    }
  }

  onHandleShowColorPicker() {
    this.setState(state => ({ displayColorPicker: !state.displayColorPicker }));
  }

  handleChange(color) {
    this.setState({ background: color.hex });
  }

  render() {
    const { classes } = this.props;
    console.log('classes', classes);
    return (
      <div className={classes.root}>
        <Box bgcolor={this.state.background} onClick={this.onHandleShowColorPicker.bind(this)} /> 
        {this.state.displayColorPicker && <ChromePicker
          color={ this.state.background }
          onChange={ this.handleChange.bind(this) }
        />}
       
      </div>
    );
  }
}

export default withStyles(styles)(Colors);