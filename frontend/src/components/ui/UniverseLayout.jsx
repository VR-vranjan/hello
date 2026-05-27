import StarField from "../stars/StarField";
import ShootingStars from "../stars/ShootingStars";

function UniverseLayout({ children }) {
  return (
    <main className="page universe-bg">
      <StarField />
      <ShootingStars />

      {children}
    </main>
  );
}

export default UniverseLayout;