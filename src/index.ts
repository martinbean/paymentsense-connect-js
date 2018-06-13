import Connection from './connection';

export default class PaymentsenseConnect {
    subdomain: string;
    apiKey: string;
    version: string;

    constructor(subdomain: string, apiKey: string, version: string = 'v0') {
        this.subdomain = subdomain;
        this.apiKey = apiKey;
        this.version = version;
    }

    connect() {
        return new Promise((resolve, reject) => {
            const socket = new WebSocket(this.url());

            socket.addEventListener('open', () => {
                resolve(new Connection(socket));
            });

            socket.addEventListener('error', (error) => {
                reject(error);
            });
        });
    }

    private url(): string
    {
        return `wss://${this.subdomain}.connect.paymentsense.cloud/pac?token=${this.apiKey}&api-version=${this.version}`;
    }
}
