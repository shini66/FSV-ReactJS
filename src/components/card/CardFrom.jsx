import { useState } from "react";
import Button from "../ui/Buttom";
import Input from "../ui/Input";

function CardForm({ onSaveUserData }) {
  const [primaryParamValue, setPrimaryParamValue] = useState("");
  const [secondaryParamValue, setSecondaryParamValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      name: primaryParamValue,
      age: secondaryParamValue,
    };

    onSaveUserData(newUser);

    setPrimaryParamValue("");
    setSecondaryParamValue("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <Input
              label="Nombre"
              value={primaryParamValue}
              onChange={(e) => setPrimaryParamValue(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Input
              label="Edad"
              type="number"
              value={secondaryParamValue}
              onChange={(e) => setSecondaryParamValue(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="submit"
              label=""
              buttonType="primary"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              }
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CardForm;
