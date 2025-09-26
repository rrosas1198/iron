export enum SFTPFileTransferFlag {
    FileTransferRead = 0x00000001,
    FileTransferWrite = 0x00000002,
    FileTransferAppend = 0x00000004,
    FileTransferCreate = 0x00000008,
    FileTransferTruncate = 0x00000010,
    FileTransferExclusive = 0x00000020
}
