import { useState } from "react";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { ROUTE_NAMES } from "../../../../router/routeNames";

import styles from "./index.module.scss";

const SignUpLayout = ({ formik, data, error, valuePassword }) => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <TextField
            id="firstName"
            name="firstName"
            type="firstName"
            autoComplete="on"
            color={formik.errors.firstName ? "error" : "success"}
            label={
              formik.errors.firstName ? formik.errors.firstName : "First name"
            }
            variant="standard"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={styles.input}
          />
        </div>

        <div className={styles.inputWrapper}>
          <TextField
            id="lastName"
            name="lastName"
            type="lastName"
            autoComplete="on"
            color={formik.errors.lastName ? "error" : "success"}
            label={
              formik.errors.lastName ? formik.errors.lastName : "Last name"
            }
            variant="standard"
            required
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={styles.input}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FormControl variant="standard">
            <InputLabel
              id="gender-label"
              color={formik.errors.gender ? "error" : "success"}
              required
            >
              {formik.errors.gender ? formik.errors.gender : "Gender"}
            </InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              color={formik.errors.gender ? "error" : "success"}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.inputWrapper}>
          <TextField

            id="phone"
            name="phone"
            type="phone"
            autoComplete="on"
            color={formik.errors.phone ? "error" : "success"}
            label={formik.errors.phone ? formik.errors.phone : "Phone"}
            variant="standard"
            required
            onChange={formik.handleChange}
            value={formik.values.phone}
            className={styles.input}
          />
        </div>

        <div className={styles.inputWrapper}>
          <TextField
            id="email"
            name="email"
            type="email"
            autoComplete="on"
            color={formik.errors.email ? "error" : "success"}
            label={
              formik.errors.email ? `Email: ${formik.errors.email}` : "Email"
            }
            variant="standard"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
            className={styles.input}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FormControl variant="standard">
            <InputLabel color={formik.errors.password ? "error" : "success"}
              required
            >
              {formik.errors.password
                ? `Password: ${formik.errors.password}`
                : "Password"}
            </InputLabel>
            <Input
              id="password"
              name="password"
              label="lol"
              autoComplete="on"
              type={valuePassword.showPassword ? "text" : "password"}
              color={formik.errors.password ? "error" : "success"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </FormControl>
        </div>
        <button className={styles.button} type="submit">
          Create Account
        </button>

        {data?.data.message && (
          <Snackbar show={show} autoHideDuration={6000} onClose={handleShow}>
            <Alert
              onClose={handleShow}
              severity="success"
              sx={{ width: "100%" }}
            >
              {data.data.message}
            </Alert>
          </Snackbar>
        )}

        {error?.response.data.message && (
          <Snackbar show={show} autoHideDuration={6000} onClose={handleShow}>
            <Alert onClose={handleShow} severity="error" sx={{ width: "100%" }}>
              {error?.response.data.message}
            </Alert>
          </Snackbar>
        )}
      </form>

      <div className={styles.registration}>
        Already have an account?
        <Link className={styles.link} to={ROUTE_NAMES.SIGN_IN}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUpLayout;
