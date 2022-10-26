import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import SignUpLayout from "../components/SignUpLayout";
import { useFetching } from "../../../hooks/useFetching";
import { signUp } from "../api";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { SignUpSchema } from "../validation";

const SignUpContainer = () => {
  const { data, isLoading, error, handleDataLoad } = useFetching(
    signUp,
    null,
    false
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
    },
    onSubmit: (values, { handleFormReset }) => {
      handleDataLoad(values);

      handleFormReset();
    },
    validationSchema: SignUpSchema,
  });

  const [valuePassword] = useState({
    password: "",
    showPassword: false,
  });


  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        localStorage.setItem("data", data.config.data);

        navigate(ROUTE_NAMES.SIGN_IN);
      }, 3000);

      return () => clearTimeout(timeout);
    }
    if (error?.message) {
      error.response.data.message = null;
    }
  }, [data, navigate, error]);

  return (
    <SignUpLayout
      formik={formik}
      data={data}
      error={error}
      isLoading={isLoading}
      valuePassword={valuePassword}
    />
  );
};

export default SignUpContainer;
