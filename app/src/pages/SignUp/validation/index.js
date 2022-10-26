import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address"),
  password: Yup.string()
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Weak password")
    .min(8, "Password must be at least 8 characters long"),
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "So Long!"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "So Long!"),
  gender: Yup.string(),
  phone: Yup.string()
    .matches(
      /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
      "Invalid phone number"
    ),
});
