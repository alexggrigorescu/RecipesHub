import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Modal({
  modalTitle,
  openButtonLabel,
  primaryButtonLabel,
  secondaryButtonLabel,
  children,
  ...props
}) {
  const [showModal, setShowModal] = useState(false);

  const validate = Yup.object({
    fullName: Yup.string()
      .min(10, "Full name must be at least 10 characters")
      .required("Full name is required."),

    location: Yup.string()
      .min(8, "The location must be at least 8 characters.")
      .required("Location is required."),

    contact: Yup.string()
      .min(10, "Contact must be at least 10 characters.")
      .required("Contact is required."),

    occupation: Yup.string()
      .min(5, "Occupation must be at least 5 characters.")
      .required("Occupation is required."),

    description: Yup.string()
      .min(20, "Description must be at least 20 characters.")
      .required("Description is required."),
  });

  const handleSubmit = (values) => {
    alert(values.fullName + " " + values.location);
    setShowModal(false);
  };

  return (
    <>
      <Button
        label={openButtonLabel}
        buttonType="round"
        type="button"
        onClick={() => setShowModal(true)}
      />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-darkgray outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <section className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="flex justify-center gap-32">
                      <Button label="Add photo" buttonType="contain" />
                    </div>
                    <Formik
                      initialValues={{
                        fullName: "",
                        location: "",
                        contact: "",
                        occupation: "",
                        description: "",
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
                              name="fullName"
                              type="text"
                              placeholder="Full name"
                              autoComplete="off"
                            />
                            <TextField
                              inputStyle="input"
                              name="location"
                              type="text"
                              placeholder="Location"
                              autoComplete="off"
                            />
                            <TextField
                              inputStyle="input"
                              name="contact"
                              type="text"
                              placeholder="Contact"
                              autoComplete="off"
                            />
                            <TextField
                              inputStyle="input"
                              name="occupation"
                              type="text"
                              placeholder="Occupation"
                              autoComplete="off"
                            />
                            <TextField
                              inputStyle="textarea"
                              name="description"
                              rows="3"
                              placeholder="Description"
                            />
                            <div className="flex items-center justify-center md:justify-end p-2 border-t mt-6 border-solid">
                              <div className="grid grid-cols-1 md:grid-cols-2">
                                <Button
                                  // type="submit"
                                  label={secondaryButtonLabel}
                                  buttonType="warning"
                                  onClick={() => setShowModal(false)}
                                />

                                <Button
                                  type="submit"
                                  label={primaryButtonLabel}
                                  buttonType="contain"
                                />
                              </div>
                            </div>
                          </Form>
                        </div>
                      )}
                    </Formik>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
