import { useState } from "react";
import { Link } from "react-router-dom";
import StarField from "../../components/stars/StarField";
import { analyzeIdentity } from "../../services/identityApi";

function IdentityPlanet() {
  const [celestialBody, setCelestialBody] = useState("");
  const [aiMessage, setAiMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleAnalyze = async () => {
    if (!celestialBody.trim()) return;

    try {
      setLoading(true);
      localStorage.setItem("celestialBody", celestialBody.trim().toLowerCase());
      const data = await analyzeIdentity(celestialBody);
      setAiMessage(data.message);
    } catch (error) {
      setAiMessage("The stars are taking time to answer. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page universe-bg">
      <StarField />

      <div className="glass-card center-card">
        <p className="eyebrow">Identity Planet</p>

        <h1>Who are you in my sky?</h1>

        <p className="subtitle">
          If you were a celestial body in our universe, what would you be?
        </p>

        <input
          className="cosmic-input"
          placeholder="Moon, star, comet, galaxy..."
          value={celestialBody}
          onChange={(e) => setCelestialBody(e.target.value)}
        />

        <br />

        <button className="glow-button" onClick={handleAnalyze}>
          {loading ? "Reading the stars..." : "Ask the Universe"}
        </button>

        {aiMessage && <p className="identity-preview">{aiMessage}</p>}

        {aiMessage && (
          <Link to="/constellation" className="glow-button">
            Open Memory Sky
          </Link>
        )}
      </div>
    </main>
  );
}

export default IdentityPlanet;