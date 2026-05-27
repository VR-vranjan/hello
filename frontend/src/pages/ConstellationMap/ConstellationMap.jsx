import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import StarField
from "../../components/stars/StarField";

import MemoryStar
from "../../components/stars/MemoryStar";

import { getMemories, narrateMemory } from "../../services/memoryApi";

function ConstellationMap() {

  const [
    memories,
    setMemories
  ] = useState([]);

  

  const [
    selected,
    setSelected
  ] = useState(null);

  useEffect(() => {

    loadMemories();

  }, []);

  

  const loadMemories =
  async () => {

    const data =
    await getMemories();

    setMemories(
      data.memories
    );
  };

  return (

    <main className="page universe-bg">

      <StarField />

      <div className="glass-card center-card">

        <h1>
          Constellation Memories
        </h1>

        <p className="subtitle">

          Every star
          carries
          a moment.

        </p>

        <div
        className="memory-grid">

          {
            memories.map(
              memory => (

              <MemoryStar

              key={
                memory.id
              }

              memory={
                memory
              }

              onClick={setSelected}

              />

            ))
          }

        </div>

        {
          selected && (

          <div
          className="memory-popup">

            <h3>
              {
                selected.title
              }
            </h3>
            {selected.image && (
  <img
    src={selected.image}
    alt={selected.title}
    className="memory-image"
  />
)}

            <p>
              {
                  selected.content
                  
                }
                
            </p>

          </div>

          )
        }

        <Link
        to="/letters"
        className="glow-button">

          Visit Letter Planets

        </Link>

      </div>

    </main>

  );
}

export default ConstellationMap;