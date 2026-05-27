import { Link } from "react-router-dom";
import StarField from "../../components/stars/StarField";
import Typewriter from "../../components/ui/Typewriter";

function FinalGalaxy() {
  return (
    <main className="page universe-bg">
      <StarField />

      <div className="glass-card center-card">

        <p className="eyebrow">
          Final Galaxy
        </p>

        <h1>
          <Typewriter
            text="The stars connected."
            speed={65}
          />
        </h1>

        <p className="subtitle">
          Galaxies drift.
          Stars fade.

          But if there is one thing I know...

          I would still find you.

          In every universe.
        </p>

        <Link
          to="/secret"
          className="glow-button"
        >
          One Last Star
        </Link>

      </div>

    </main>
  );
}

export default FinalGalaxy;