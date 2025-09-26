export interface SFTPAttributes {
    size?: bigint;
    uid?: number;
    gid?: number;
    permissions?: number;
    atime?: number;
    mtime?: number;
}

export interface SFTPEntry {
    name: string;
    longname?: string;
    attributes: SFTPAttributes;
    isDirectory: boolean;
    isFile: boolean;
    isSymlink: boolean;
}

export interface SFTPHandle {
    read(buffer: Uint8Array): Promise<number>;
    write(data: Uint8Array): Promise<number>;
    close(): Promise<void>;
    seek(offset: bigint): void;
    tell(): bigint;
    stat(): Promise<SFTPAttributes>;
}

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
