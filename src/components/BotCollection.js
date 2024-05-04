import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ addToArmy, onDelete }) {
  // Your code here
    const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot) => (
          <BotCard onDelete={()=> onDelete(bot.id)}  key={bot.id} bot={bot} action={addToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
