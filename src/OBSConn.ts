import { OBSWebSocket } from 'obs-websocket-js';

let obs: OBSWebSocket | null = null;

export async function connectToOBS() {
	if (!obs) {
		obs = new OBSWebSocket();
	}
	try {
		await obs.connect('ws://127.0.0.1:4455', 'lmm6kF5o7CSiDp0k');
		console.debug('Connected to OBS');
	} catch (error) {
		console.error('Failed to connect to OBS:', error);
	}
}

export function getOBS(): OBSWebSocket | null {
	return obs;
}