import { NavLink } from "react-router";
import { Arrow } from "@/shared/components/Arrow/Arrow.tsx";

export const ArrowToMainBlock = () => {
  return (
    <nav className="absolute">
      <NavLink to="/">
        <Arrow />
      </NavLink>
    </nav>
  );
};
