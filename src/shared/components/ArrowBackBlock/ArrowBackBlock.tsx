import { NavLink } from "react-router";
import { Arrow } from "@/shared/components/Arrow/Arrow.tsx";

export const ArrowToMainBlock = () => {
  return (
    <nav>
      <NavLink to="/">
        <Arrow />
      </NavLink>
    </nav>
  );
};
