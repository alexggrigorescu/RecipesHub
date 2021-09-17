import React from "react";
import Button from "./Button";

export default function FloatingButton({ label, buttonType }) {
  return (
    <div className="absolute">
      <Button buttonType="contain" label={label} buttonType={buttonType} />
    </div>
  );
}
