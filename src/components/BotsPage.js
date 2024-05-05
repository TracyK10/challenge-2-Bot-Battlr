import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [selectedBots, setSelectedBots] = useState([]);

  // adds a bot to YourBotArmy and is passed as a prop
  function addToArmy(bot) {
    if (!selectedBots.some((selectedBot) => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  }
  // returns a bot to BotCollection and is passed as a prop
  function releaseFromArmy(bot) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
  }
  // deletes a bot from YourBotArmy and is passed as a prop
  function dischargeFromService(id) {
    setSelectedBots(
      selectedBots.filter((selectedBot) => selectedBot.id !== id)
    );
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <YourBotArmy
        onDelete={dischargeFromService}
        bots={selectedBots}
        releaseFromArmy={releaseFromArmy}
      />
      <BotCollection addToArmy={addToArmy} onDelete={dischargeFromService} />
    </div>
  );
}

export default BotsPage;
