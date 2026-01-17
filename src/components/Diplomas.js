import { getDiplomas } from "../api";
import { Outlet, NavLink } from "react-router-dom";

export default function Diplomas() {
  const diplomas = getDiplomas();

  return (
    <div className="container">
      <h1>SOI Diplomas</h1>

      <ul className="categories">
        {diplomas.map((diploma) => (
          <li className="card" key={diploma.id}>
            <NavLink
              to={diploma.id}
              className={({ isActive }) =>
                isActive ? "card-link card-link-active" : "card-link"
              }
            >
              <img
                src={diploma.image}
                className="card-logo"
                alt={diploma.name + " image"}
              />
              <p className="card-title">{diploma.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
