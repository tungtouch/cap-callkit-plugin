import { WebPlugin } from '@capacitor/core';
export class CallKitVoipWeb extends WebPlugin {
    async register() {
        return;
    }
    async incomingCall({ from }) {
        console.log(from);
        return;
    }
}
//# sourceMappingURL=web.js.map