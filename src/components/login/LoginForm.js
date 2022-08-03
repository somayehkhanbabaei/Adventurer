import React from "react";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./LoginForm.css";

function LoginForm() {
  return (
    <Grid>
      <Paper className="layout" elevation={2}>
        <Grid align="center">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <TextField
          id="username"
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          required
        />
        <FormControlLabel
          className="check"
          control={<Checkbox name="checkedB" className="check--remember" />}
          label="Remember me"
        />
        <Grid className="btn">
          <Button className="signin--btn" variant="contained">
            Sign In
          </Button>

          <Button className="signup--btn" variant="contained">
            Sign Up
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
