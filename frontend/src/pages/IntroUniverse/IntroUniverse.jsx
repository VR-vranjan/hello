import { Link } from "react-router-dom";

import StarField from "../../components/stars/StarField";
import Typewriter from "../../components/ui/Typewriter";

function IntroUniverse() {
  return (
    <main className="page universe-bg">
      <StarField />

      <div className="glass-card center-card">

        <h1>
          <Typewriter
            text="The universe is huge."
            speed={70}
          />
        </h1>

        <img
          src="/images/memory/intro.jpeg"
          alt="Us"
          className="intro-image"
        />

        <p className="subtitle">
          Yet somehow, I found you☺️😎.
        </p>

        <Link
          to="/identity"
          className="glow-button"
        >
          Continue
        </Link>

      </div>
    </main>
  );
}

export default IntroUniverse;