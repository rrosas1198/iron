import type { SFTPAttributes } from "./sftp-attributes.interface.ts";

export interface SFTPHandle {
    read(buffer: Uint8Array): Promise<number>;
    write(data: Uint8Array): Promise<number>;
    close(): Promise<void>;
    seek(offset: bigint): void;
    tell(): bigint;
    stat(): Promise<SFTPAttributes>;
}
