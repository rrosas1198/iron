import type { SSHAuthenticationMethod } from "./ssh-authentication.interface.ts";

export interface SSHConfig {
    hostname: string;
    port?: number;
    username: string;
    auth: SSHAuthenticationMethod;
    banner?: string;
    timeout?: number;
    hostKeyVerification?: boolean;
}
