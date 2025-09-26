import type { SSHKeyboardInteractiveCallback } from "./ssh-keyboard.interface.ts";

export type SSHAuthenticationMethod =
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
