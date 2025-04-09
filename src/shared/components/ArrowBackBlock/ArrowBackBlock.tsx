import { NavLink } from "react-router";
import { Arrow } from "@/shared/components/Arrow/Arrow.tsx";

export const ArrowToMainBlock = () => {
  return (
    <nav className="absolute">
      <NavLink to="/">
        <div className="w-10 h-10 flex items-center justify-center">
          <Arrow />
        </div>
      </NavLink>
    </nav>
  );
};
