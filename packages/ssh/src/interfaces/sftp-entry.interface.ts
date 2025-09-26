import type { SFTPAttributes } from "./sftp-attributes.interface.ts";

export interface SFTPEntry {
    name: string;
    longname?: string;
    attributes: SFTPAttributes;
    isDirectory: boolean;
    isFile: boolean;
    isSymlink: boolean;
}
