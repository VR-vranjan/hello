import { Link } from "react-router-dom";
import UniverseLayout from "../../components/ui/UniverseLayout";

function Landing() {
  return (
    <UniverseLayout>

      <div className="glass-card center-card">

        <p className="eyebrow">
          A universe built for us
        </p>

        <h1>
          Our Constellation
        </h1>

        <p className="subtitle">
          Somewhere between stars,
          planets and forever...
          this story begins.
        </p>

        <Link
          to="/intro"
          className="glow-button"
        >
          Begin Journey
        </Link>

      </div>

    </UniverseLayout>
  );
}

export default Landing;