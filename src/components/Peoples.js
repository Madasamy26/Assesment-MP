import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonAppBar from "./ButtonAppBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import TablePeople from "./TablePeople";
import PostPeople from "./PostPeople";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },

  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class Peoples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPeopleId: ""
    };
  }

  componentDidMount() {
    console.log(
      typeof moment().format("MMM DD YY") + moment().format("MMM DD YY")
    );
  }

  clickHandler(id) {
    this.setState({ selectedPeopleId: id });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete(id) {
    this.props.dispatch({ type: "DELETE_POST", id: id });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ButtonAppBar />
        <Grid container spacing={8} style={{ marginTop: "5px" }}>
          <Grid item xs={12} style={{ marginLeft: "8px", marginRight: "8px" }}>
            <Paper className={classes.paper}>
              <h1>Peoples</h1>
              <div className={classes.demo}>
                <TablePeople peoples={this.props.peoples} />
                <div className="fixed-bottom-custom">
                  <PostPeople />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    peoples: state
  };
};

Peoples.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Peoples));
