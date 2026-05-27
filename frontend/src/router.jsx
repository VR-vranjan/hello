import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import IntroUniverse from "./pages/IntroUniverse/IntroUniverse";
import IdentityPlanet from "./pages/IdentityPlanet/IdentityPlanet";
import ConstellationMap from "./pages/ConstellationMap/ConstellationMap";
import LetterPlanets from "./pages/LetterPlanets/LetterPlanets";
import AstronomyQuest from "./pages/AstronomyQuest/AstronomyQuest";
import FinalGalaxy from "./pages/FinalGalaxy/FinalGalaxy";
import SecretEnding from "./pages/SecretEnding/SecretEnding";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/intro", element: <IntroUniverse /> },
  { path: "/identity", element: <IdentityPlanet /> },
  { path: "/constellation", element: <ConstellationMap /> },
  { path: "/letters", element: <LetterPlanets /> },
  { path: "/quest", element: <AstronomyQuest /> },
  { path: "/final", element: <FinalGalaxy /> },
  { path: "/secret", element: <SecretEnding /> },
]);

export default router;