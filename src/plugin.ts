import streamDeck, { LogLevel } from "@elgato/streamdeck";
import { connectToOBS } from "./OBSConn";
import { ZoomIn } from "./actions/obs-hotkey";

(async () => {
	await connectToOBS();
})();

streamDeck.logger.info("Hello world");

streamDeck.logger.setLevel(LogLevel.TRACE);
streamDeck.actions.registerAction(new ZoomIn());
streamDeck.connect(); // Finally, connect to the Stream Deck.