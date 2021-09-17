import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextField({
  type,
  inputStyle,
  placeholder,
  onChange,
  autoComplete = "off",
  ...props
}) {
  const [field, meta] = useField(props);

  if (inputStyle === "input") {
    return (
      <div className="my-5">
        <input
          className={`bg-gray-100 dark:bg-gray-600 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-400 hover:scale-105 transition transform duration-200 ease-out shadow-md ${
            meta.touched && meta.error && `border-red-500`
          }`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...field}
          {...props}
          autoComplete={autoComplete}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500"
        />
      </div>
    );
  } else if (inputStyle === "textarea") {
    return (
      <div className="my-5">
        <textarea
          className={`form-textarea mt-1 block bg-gray-100 dark:bg-gray-600 appearance-none border-1 border-gray-200 rounded w-full py-2 px-4 
          leading-tight focus:outline-none focus:bg-white focus:border-gray-400 
         hover:scale-105 transition transform duration-200 ease-out shadow-md`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...field}
          {...props}
          autoComplete={autoComplete}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="text-red-500"
        />
      </div>
    );
  }
}
