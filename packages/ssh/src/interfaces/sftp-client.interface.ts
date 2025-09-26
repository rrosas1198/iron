import type { SFTPAttributes } from "./sftp-attributes.interface.ts";
import type { SFTPEntry } from "./sftp-entry.interface.ts";
import type { SFTPHandle } from "./sftp-handle.interface.ts";

export interface SFTPClient {
    open(filename: string, flags?: number, mode?: number): Promise<SFTPHandle>;
    opendir(path: string): Promise<SFTPHandle>;
    readdir(handle: SFTPHandle): Promise<SFTPEntry[]>;
    stat(path: string): Promise<SFTPAttributes>;
    lstat(path: string): Promise<SFTPAttributes>;
    unlink(filename: string): Promise<void>;
    mkdir(path: string, mode?: number): Promise<void>;
    rmdir(path: string): Promise<void>;
    rename(oldpath: string, newpath: string): Promise<void>;
    symlink(target: string, linkpath: string): Promise<void>;
    readlink(path: string): Promise<string>;
    realpath(path: string): Promise<string>;
    close(): Promise<void>;
}
