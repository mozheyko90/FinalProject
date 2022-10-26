import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { ROUTE_NAMES } from "../../../../router/routeNames";

import styles from "./index.module.scss";
import Snackbar from "../../../../components/SnackBar";

const SignInLayout = ({ formik, valuePassword, error, isAuth }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Sign In</h2>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <TextField
              id="email"
              name="email"
              type="email"
              color={formik.errors.email ? "error" : "success"}
              label={
                formik.errors.email ? `Email: ${formik.errors.email}` : "Email"
              }
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="on"
              variant="standard"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputWrapper}>
          <FormControl variant="standard">
            <InputLabel
                color={formik.errors.password ? "error" : "success"}
                required
              >
                {formik.errors.password
                  ? `Password: ${formik.errors.password}`
                  : "Password"}
              </InputLabel>
              <Input
                id="password"
                name="password"
                type={valuePassword.showPassword ? "text" : "password"}
                color={formik.errors.password ? "error" : "success"}
                autoComplete="on"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </FormControl>
          </div>

          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
        <div className={styles.login}>
          <Link className={styles.link} to={ROUTE_NAMES.SIGN_UP}>
            Don't have an account?
          </Link>
        </div>
      </div>
      {isAuth && (
        <Snackbar
          timeAlert={2000}
          textAlert="You successfully log in."
          severity="success"
        />
      )}

      {error && (
        <Snackbar
          timeAlert={3000}
          textAlert={error.message}
          severity="error"
        />
      )}
    </div>
  );
};

export default SignInLayout;
