import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import moment from "moment";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const uuidv1 = require("uuid/v1");

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class PostPeople extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const createdOn = moment().format("MMM DD YY");

    const data = {
      id: uuidv1(),
      name,
      createdOn
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });

    this.setState({ name: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormControl fullWidth className={classes.formControl}>
            <Input
              id="name-simple"
              value={this.state.name}
              onChange={this.handleChange}
              disableUnderline={true}
              placeholder="Enter Name"
              endAdornment={
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                  className={classes.button}
                >
                  ADD
                </Button>
              }
            />
          </FormControl>
        </form>
      </div>
    );
  }
}

PostPeople.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(PostPeople));
