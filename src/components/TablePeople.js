import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class TablePeople extends Component {
  handleDelete(id) {
    this.props.dispatch({ type: "DELETE_POST", id: id });
  }
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created on</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.peoples.map((people, index) => {
              return (
                <TableRow key={people.id}>
                  <TableCell numeric>{index + 1}</TableCell>
                  <TableCell>{people.name}</TableCell>
                  <TableCell>{people.createdOn}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={this.handleDelete.bind(this, people.id)}
                      aria-label="Delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
TablePeople.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(TablePeople));
