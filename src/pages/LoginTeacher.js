import React, { useState } from "react";
import "./Login";
import Grid from "@mui/material/Grid";
import "../components/Login.component.css";
import { useLogin } from "../hooks/useLogin";
import {
  Paper,
  TextField,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Alert,
} from "@mui/material";
import Login from "./Login";
function LoginTeacher() {
  const [showStudent, setShowStudent] = useState(false);
  const [showTeacher, setShowTeacher] = useState(true);
  const { login, error, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const handleStudent = () => {
    setShowTeacher(false);
    setShowStudent(true);
  };
  const handleTeacher = () => {
    setShowTeacher(true);
    setShowStudent(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form id="hello" onSubmit={handleSubmit}>
      {showTeacher && (
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Teacher Login</h2>
            </Grid>
            <TextField
              label="E-mail"
              fullWidth
              required
              sx={{ mb: 1 }}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!isPending && (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Login
              </Button>
            )}
            {isPending && (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                disabled
              >
                Loading
              </Button>
            )}
            <RadioGroup defaultValue="teacher">
              <FormControlLabel
                value="student"
                control={
                  <Radio color="primary" onChange={() => handleStudent()} />
                }
                label="Student"
              />
              <FormControlLabel
                value="teacher"
                control={
                  <Radio color="primary" onChange={() => handleTeacher()} />
                }
                label="Teacher"
              />
            </RadioGroup>
          </Paper>
        </Grid>
      )}
      {showStudent && <Login />}
      {error && (
        <Alert severity="error">
          <p>{error}</p>
        </Alert>
      )}
    </form>
  );
}

export default LoginTeacher;
