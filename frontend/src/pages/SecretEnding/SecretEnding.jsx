import StarField from "../../components/stars/StarField";
import Typewriter from "../../components/ui/Typewriter";

function SecretEnding() {
  return (
    <main className="page universe-bg">

      <StarField />

      <div className="glass-card center-card">

        <p className="eyebrow">
          Secret Ending
        </p>

        <h1>

          <Typewriter
            text="My favorite constellation is always us."
            speed={55}
          />

        </h1>

        <img
          src="/images/memory/us.jpg"
          alt="Our Memory"
          className="final-image"
        />

        <p className="subtitle">

          Even after all these stars...

          my favorite place
          was, is and always will be
          beside you.
          HAPPY BIRTHDAY KHARGOSH🥳🥳.

        </p>

      </div>

    </main>
  );
}

export default SecretEnding;