import { SSHErrorCode } from "../enums/ssh-error-code.enum.ts";

export class SSHException extends Error {
    readonly #_code: SSHErrorCode;
    readonly #_errno: number | undefined;

    constructor(message: string, code: SSHErrorCode, errno?: number) {
        super(message);
        this.name = "SSHException";
        this.#_code = code;
        this.#_errno = errno;
    }

    get code(): number {
        return this.#_code;
    }

    get errno(): number | undefined {
        return this.#_errno;
    }

    static fromCode(code: SSHErrorCode, message?: string): SSHException {
        const message_ = message || SSHException.#_getStatusName(code);
        return new SSHException(message_, code);
    }

    static #_getStatusName(code: SSHErrorCode): string {
        switch (code) {
            case SSHErrorCode.None:
                return "No error";
            case SSHErrorCode.SocketNone:
                return "Socket error";
            case SSHErrorCode.BannerReceive:
                return "Banner receive error";
            case SSHErrorCode.BannerSend:
                return "Banner send error";
            case SSHErrorCode.InvalidMessageAuthenticationCode:
                return "Invalid MAC";
            case SSHErrorCode.KeyExchangeFailure:
                return "Key exchange failure";
            case SSHErrorCode.AllocationFailure:
                return "Memory allocation error";
            case SSHErrorCode.SocketSendFailure:
                return "Socket send error";
            case SSHErrorCode.KeyExchangeFailureDuplicate:
                return "Key exchange failure (duplicate)";
            case SSHErrorCode.Timeout:
                return "Timeout";
            case SSHErrorCode.HashInitializationFailure:
                return "Host key initialization error";
            case SSHErrorCode.HostKeySignFailure:
                return "Host key signature error";
            case SSHErrorCode.DecryptionFailure:
                return "Decryption error";
            case SSHErrorCode.SocketDisconnect:
                return "Socket disconnected";
            case SSHErrorCode.ProtocolError:
                return "Protocol error";
            case SSHErrorCode.PasswordExpired:
                return "Password expired";
            case SSHErrorCode.FileError:
                return "File error";
            case SSHErrorCode.MethodNone:
                return "No authentication method available";
            case SSHErrorCode.AuthenticationFailed:
                return "Authentication failed";
            case SSHErrorCode.PublicKeyUnverified:
                return "Public key unverified";
            case SSHErrorCode.ChannelOutOfOrder:
                return "Channel out of order";
            case SSHErrorCode.ChannelFailure:
                return "Channel failure";
            case SSHErrorCode.ChannelRequestDenied:
                return "Channel request denied";
            case SSHErrorCode.ChannelUnknown:
                return "Unknown channel";
            case SSHErrorCode.ChannelWindowExceeded:
                return "Channel window exceeded";
            case SSHErrorCode.ChannelPacketExceeded:
                return "Channel packet exceeded";
            case SSHErrorCode.ChannelClosed:
                return "Channel closed";
            case SSHErrorCode.ChannelEndOfFileSent:
                return "Channel EOF sent";
            case SSHErrorCode.ScpProtocolError:
                return "SCP protocol error";
            case SSHErrorCode.ZlibError:
                return "Compression error";
            case SSHErrorCode.SocketTimeout:
                return "Socket timeout";
            case SSHErrorCode.SftpProtocolError:
                return "SFTP protocol error";
            case SSHErrorCode.RequestDenied:
                return "Request denied";
            case SSHErrorCode.MethodNotSupported:
                return "Method not supported";
            case SSHErrorCode.Invalid:
                return "Invalid parameter";
            case SSHErrorCode.InvalidPollType:
                return "Invalid poll type";
            case SSHErrorCode.PublicKeyProtocolError:
                return "Public key protocol error";
            case SSHErrorCode.TryAgain:
                return "Operation would block";
            case SSHErrorCode.BufferTooSmall:
                return "Buffer too small";
            case SSHErrorCode.BadUse:
                return "Bad library usage";
            case SSHErrorCode.CompressionError:
                return "Compression error";
            case SSHErrorCode.OutOfBoundary:
                return "Out of boundary";
            case SSHErrorCode.AgentProtocolError:
                return "SSH agent protocol error";
            case SSHErrorCode.SocketReceiveFailure:
                return "Socket receive error";
            case SSHErrorCode.EncryptionFailure:
                return "Encryption error";
            case SSHErrorCode.BadSocket:
                return "Bad socket";
            case SSHErrorCode.KnownHostsError:
                return "Known hosts error";
            case SSHErrorCode.ChannelWindowFull:
                return "Channel window full";
            case SSHErrorCode.KeyfileAuthenticationFailed:
                return "Key file authentication failed";
            default:
                return "Unknown";
        }
    }
}
