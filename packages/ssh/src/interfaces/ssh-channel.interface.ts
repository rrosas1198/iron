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
