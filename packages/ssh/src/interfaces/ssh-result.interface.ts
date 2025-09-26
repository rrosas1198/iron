export interface SSHResult {
    stdout: string;
    stderr: string;
    exitCode: number;
    exitSignal?: string;
}
