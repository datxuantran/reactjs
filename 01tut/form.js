import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEditting, setEditting] = useState(true);

  function handlerSubmit(e) {
    e.preventDefault();
    setEditting(!isEditting);
  }

  function handlerChangeFirstName(e) {
    e.stopPropagation();
    setFirstName(e.target.value);
  }

  function handlerChangeLastName(e) {
    e.stopPropagation();
    setLastName(e.target.value);
  }

  return (
    <form>
      <label onChange={(e) => handlerChangeFirstName(e)}>
        First name:
        {!isEditting ? (
          <input disabled={isEditting} value={firstName} />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label onChange={(e) => handlerChangeLastName(e)}>
        Last name:
        {!isEditting ? (
          <input disabled={isEditting} value={lastName} />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button
        type="submit"
        onClick={(e) => {
          handlerSubmit(e);
        }}
      >
        {isEditting ? "Edit" : "Save"} Profile
      </button>
      <p>
        <i>
          Hello {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
