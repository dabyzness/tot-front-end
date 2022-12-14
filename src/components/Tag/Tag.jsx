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
        backgroundColor: "#0d3b66",
        border: "1px solid #0d3b66",
      }}
      onClick={() => {
        if (buttonRef.current.ariaPressed === "true") {
          if (addedTags.includes(name)) {
            return;
          }

          setSearchTerm(searchTerm + `${name},`);
          buttonRef.current.textContent = `${name} \u2713`;
        } else {
          setSearchTerm(searchTerm.replace(`${name},`, ""));
          buttonRef.current.textContent = `${name}`;
        }
      }}
    >
      {addedTags.includes(name) ? `${name} \u2713` : `${name}`}
    </button>
  );
};

export default Tag;
