import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signIn, signOut, getSession } from "next-auth/client";

import leftImage from "../../assets/backgroundImage.jpg";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function login({ session }) {
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("E-mail is required."),
    password: Yup.string()
      .min(8, "The password must be at least 8 characters.")
      .required("Password is required."),
  });

  const handleSubmit = (values) => {
    console.log(values.email + " " + values.password);
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
            <button
              onClick={() => signIn()}
              className="bg-red-600 p-5 rounded-full"
            >
              Sign In with GOOGLE
            </button>

            <h1 className="mt-2 text-3xl font-bold ">Welcome Back!</h1>
            <p>You are logged in as {session?.user.name} </p>
            <p className="mt-2 text-sm ">Please sign in to your account</p>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
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
                  <Button type="submit" label="Sign In" buttonType="contain" />
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  //redirect
  if (session) return { redirect: { destination: "/", permanent: false } };

  return {
    props: { session },
  };
}
