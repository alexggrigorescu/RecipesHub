import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less.")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less.")
      .required("Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("E-mail is required."),
    password: Yup.string()
      .min(8, "The password must be at least 8 characters.")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwrod missmatch")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="absolute w-full">
        <Header />
      </div>
      <main
        className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://www.flyingfishlab.com/wp-content/uploads/2018/01/uni-food-background.jpg)`,
        }}
      >
        <div className="max-w-md w-full space-y-8 p-10 rounded-xl z-10 shadow-2xl bg-white dark:bg-darkgray">
          <div className="text-center">
            <h1 className="mt-2 text-3xl font-bold ">
              Welcome to Recipes HUB!
            </h1>
            <p className="mt-2 text-sm ">Please create an account</p>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(formik) => (
              <div>
                <Form>
                  <TextField
                    inputStyle="input"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    autoComplete="off"
                  />
                  <TextField
                    inputStyle="input"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    autoComplete="off"
                  />
                  <TextField
                    inputStyle="input"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                  />
                  <TextField
                    inputStyle="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <TextField
                    inputStyle="input"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                  <Button type="submit" label="Sign Up" buttonType="contain" />
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}
