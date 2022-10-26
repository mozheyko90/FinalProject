import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { ROUTE_NAMES } from "../../../router/routeNames";
import { SignInSchema } from "../validation";
import { SignInAuth } from "../reducers";
import SignInLayout from "../components/SignInLayout";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      dispatch(SignInAuth(values));

      resetForm();
    },
    validationSchema: SignInSchema,
  });

  const [valuePassword] = useState({
    password: "",
    showPassword: false,
  });


  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.PRODUCTS);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return <SignInLayout formik={formik} valuePassword={valuePassword} isAuth={isAuth} />;
};

export default SignInContainer;