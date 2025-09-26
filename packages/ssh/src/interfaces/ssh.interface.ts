export type SSHAuthMethod =
    | { type: "password"; password: string }
    | {
        type: "publickey";
        privateKey: string;
        publicKey?: string;
        passphrase?: string;
    }
    | { type: "agent" }
    | {
        type: "keyboard-interactive";
        responseCallback: SSHKeyboardInteractiveCallback;
    };

export interface SSHConfig {
    hostname: string;
    port?: number;
    username: string;
    auth: SSHAuthMethod;
    banner?: string;
    timeout?: number;
    hostKeyVerification?: boolean;
}

export interface SSHChannel {
    read(bufferSize?: number): Promise<Uint8Array>;
    write(data: Uint8Array | string): Promise<number>;
    exec(command: string): Promise<void>;
    shell(): Promise<void>;
    close(): Promise<void>;
    eof: boolean;
    exitCode?: number;
    exitSignal?: string;
}

export interface SSHResult {
    stdout: string;
    stderr: string;
    exitCode: number;
    exitSignal?: string;
}

export interface SSHKeyboardInteractiveCallback {
    (prompts: SSHKeyboardInteractivePrompt[]): Promise<string[]>;
}

export interface SSHKeyboardInteractivePrompt {
    text: string;
    echo: boolean;
}
