export enum SSHTraceFlag {
    Transport = 1 << 1,
    KeyExchange = 1 << 2,
    Authentication = 1 << 3,
    Connection = 1 << 4,
    Scp = 1 << 5,
    Sftp = 1 << 6,
    Error = 1 << 7,
    PublicKey = 1 << 8,
    Socket = 1 << 9
}
