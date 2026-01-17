import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getDiplomas } from "../api";
export default function Register() {
  const navigate = useNavigate();
  const diplomas = getDiplomas();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const diplomaRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {
      state: {
        email: emailRef.current.value,
        name: nameRef.current.value,
        diploma: diplomaRef.current.value,
      },
    });
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>Please register for the course you are interested in!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>

        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <br />
          <select name="diploma" ref={diplomaRef}>
            {diplomas.map((diploma) => (
              <option key={diploma.id} value={diploma.name}>
                {diploma.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
