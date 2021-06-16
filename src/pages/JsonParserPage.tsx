import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    display: 'flex',
    overflow: 'auto',
    flex: 1,
  },
  left: {
    width: '40%'
  },
  right: {
    width: '60%'
  },
  field: {
    width: '100%',
    height: '100%',
  },
  textArea: {
    resize: 'none',
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    borderColor: theme.palette.action.active,
    color: theme.palette.action.active,
    padding: 4,
    fontSize: 13,
  }
}));

function JsonParserPage() {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.main}>
      <div className={classes.left}>
        <textarea className={classes.textArea} />
      </div>
      <Box p={1} />
      <div className={classes.right}>
        <Box border={1} className={classes.field} />
      </div>
    </Box>
  );
}

export default JsonParserPage;
