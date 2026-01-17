import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <div className="confirm-page">
      <div className="confirm-icon">✓</div>

      <h1 className="confirm-title">Registration Confirmed</h1>
      <p className="confirm-subtitle">
        Thanks for signing up! We’ll send you more information shortly.
      </p>

      {state && (
        <div className="confirm-details">
          <p>
            Hi <strong>{state.name}</strong>, your registration for{" "}
            <strong>{state.diploma}</strong> is successful.
          </p>

          <p>
            A confirmation email has been sent to <strong>{state.email}</strong>
            .
          </p>
        </div>
      )}

      <Link to="/" className="confirm-btn">
        Back to Home
      </Link>
    </div>
  );
}
