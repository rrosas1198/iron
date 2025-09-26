import { SFTPStatusCode } from "../enums/sftp-status-code.enum.ts";

export class SFTPException extends Error {
    readonly #_code: SFTPStatusCode;

    constructor(message: string, code: SFTPStatusCode) {
        super(message);
        this.name = "SFTPException";
        this.#_code = code;
    }

    get code(): number {
        return this.#_code;
    }

    static fromCode(code: SFTPStatusCode, message?: string): SFTPException {
        const message_ = message || SFTPException.#_getStatusName(code);
        return new SFTPException(message_, code);
    }

    static #_getStatusName(code: SFTPStatusCode): string {
        switch (code) {
            case SFTPStatusCode.Ok:
                return "Success";
            case SFTPStatusCode.EndOfFile:
                return "End of file";
            case SFTPStatusCode.NoSuchFile:
                return "No such file or directory";
            case SFTPStatusCode.PermissionDenied:
                return "Permission denied";
            case SFTPStatusCode.Failure:
                return "Failure";
            case SFTPStatusCode.BadMessage:
                return "Bad message";
            case SFTPStatusCode.NoConnection:
                return "No connection";
            case SFTPStatusCode.ConnectionLost:
                return "Connection lost";
            case SFTPStatusCode.OperationUnsupported:
                return "Operation unsupported";
            case SFTPStatusCode.InvalidHandle:
                return "Invalid handle";
            case SFTPStatusCode.NoSuchPath:
                return "No such path";
            case SFTPStatusCode.FileAlreadyExists:
                return "File already exists";
            case SFTPStatusCode.WriteProtect:
                return "Write protected";
            case SFTPStatusCode.NoMedia:
                return "No media";
            case SFTPStatusCode.NoSpaceOnFilesystem:
                return "No space on filesystem";
            case SFTPStatusCode.QuotaExceeded:
                return "Quota exceeded";
            case SFTPStatusCode.UnknownPrincipal:
                return "Unknown principal";
            case SFTPStatusCode.LockConflict:
                return "Lock conflict";
            case SFTPStatusCode.DirectoryNotEmpty:
                return "Directory not empty";
            case SFTPStatusCode.NotADirectory:
                return "Not a directory";
            case SFTPStatusCode.InvalidFilename:
                return "Invalid filename";
            case SFTPStatusCode.LinkLoop:
                return "Link loop";
            default:
                return "Unknown";
        }
    }
}
