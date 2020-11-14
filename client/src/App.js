import React from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1000
  }
})

const customers = [
  {
    "id": 1,
    "img": "https://placeimg.com/100/100/1",
    "name": "Hong Gildong",
    "birthday": "43",
    "gender": "male",
    "job": "Sales"
  },
  {
    "id": 2,
    "img": "https://placeimg.com/100/100/2",
    "name": "Park Gyeonwoo",
    "birthday": "43",
    "gender": "male",
    "job": "Developer"
  },
  {
    "id": 3,
    "img": "https://placeimg.com/100/100/3",
    "name": "Lee Minah",
    "birthday": "43",
    "gender": "male",
    "job": "Student"
  }
]

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Profile.</TableCell>
              <TableCell>Name.</TableCell>
              <TableCell>Birthday.</TableCell>
              <TableCell>Gender.</TableCell>
              <TableCell>Job.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                customers.map(c=>{
                  return(
                    <Customer key={c.id} id={c.id} img={c.img} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                  )
                })
              }
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
