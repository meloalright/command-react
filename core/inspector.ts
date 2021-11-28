export default {
    inspect: ReactReconcilerInst => {
        const ws = require('ws');

        const GlobalWindow = global as any;

        if (!GlobalWindow.WebSocket) {
            GlobalWindow.WebSocket = ws;
        }

        if (!GlobalWindow.window) {
            GlobalWindow.window = global;
        }

        const { connectToDevTools } = require('react-devtools-core');

        connectToDevTools();

        ReactReconcilerInst.injectIntoDevTools({
            bundleType: 0,
            version: '17.0.2',
            rendererPackageName: 'command-react'
        });
    }
}
