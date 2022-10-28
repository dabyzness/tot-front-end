import { useRef } from "react";

const Tag = ({ name, searchTerm, setSearchTerm, addedTags }) => {
  const buttonRef = useRef();
  return (
    <button
      ref={buttonRef}
      type="button"
      className="btn btn-primary"
      data-bs-toggle="button"
      autoComplete="off"
      style={{
        margin: ".25rem",
        width: "",
        borderRadius: "20px",
      }}
      onClick={() => {
        if (buttonRef.current.ariaPressed === "true") {
          setSearchTerm(searchTerm + `${name},`);
          buttonRef.current.textContent = `${name} \u2713`;
        } else {
          setSearchTerm(searchTerm.replace(`${name},`, ""));
          buttonRef.current.textContent = `${name}`;
        }
      }}
    >
      {name}
    </button>
  );
};

export default Tag;
