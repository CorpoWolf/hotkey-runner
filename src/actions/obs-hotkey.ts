import streamDeck,{ action, KeyDownEvent, SingletonAction, LogLevel } from "@elgato/streamdeck";
import { getOBS } from "../OBSConn";

@action({ UUID: "com.corpowolf.script-runner.zoom-in" })
export class ZoomIn extends SingletonAction {

	override async onKeyDown(ev: KeyDownEvent) {
		ev.action.setTitle("Hello world!");
		streamDeck.logger.info('Zooming in running');
		let obs = getOBS();
		if (!obs) {
			streamDeck.logger.info('OBS connection not established');
			return;
		}
		try {
			await obs.call('TriggerHotkeyByName', { 
				hotkeyName: 'toggle_zoom_hotkey'
			});
			streamDeck.logger.info('Triggered hotkey: Toggle_zoom_hotkey');
		} catch (error) {
				streamDeck.logger.info('Failed to trigger OBS hotkey:', error);
		}
	}
}