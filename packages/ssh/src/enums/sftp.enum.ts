export enum SFTPVersion {
    Three = 3
}

export enum SFTPAttributeFlag {
    AttributeSize = 0x00000001,
    AttributeUserIdGroupId = 0x00000002,
    AttributePermissions = 0x00000004,
    AttributeAccessModificationTime = 0x00000008,
    AttributeExtended = 0x80000000
}

export enum SFTPOpenFlag {
    OpenFile = 0,
    OpenDirectory = 1
}

export enum SFTPFileType {
    RegularFile = 1,
    Directory = 2,
    SymbolicLink = 3,
    SpecialFile = 4,
    UnknownFileType = 5,
    SocketFile = 6,
    CharacterDeviceFile = 7,
    BlockDeviceFile = 8,
    FifoFile = 9
}

export enum SFTPFileTransferFlag {
    FileTransferRead = 0x00000001,
    FileTransferWrite = 0x00000002,
    FileTransferAppend = 0x00000004,
    FileTransferCreate = 0x00000008,
    FileTransferTruncate = 0x00000010,
    FileTransferExclusive = 0x00000020
}

export enum SFTPPermissionBit {
    FileTypeMask = 0o170000, // File type mask
    Fifo = 0o010000, // FIFO
    CharacterSpecial = 0o020000, // Character special
    Directory = 0o040000, // Directory
    BlockSpecial = 0o060000, // Block special
    RegularFile = 0o100000, // Regular file
    SymbolicLink = 0o120000, // Symbolic link
    Socket = 0o140000 // Socket
}

export enum SFTPPermissionMode {
    UserReadWriteExecute = 0o000700, // User RWX
    UserRead = 0o000400, // User read
    UserWrite = 0o000200, // User write
    UserExecute = 0o000100, // User execute

    GroupReadWriteExecute = 0o000070, // Group RWX
    GroupRead = 0o000040, // Group read
    GroupWrite = 0o000020, // Group write
    GroupExecute = 0o000010, // Group execute

    OtherReadWriteExecute = 0o000007, // Other RWX
    OtherRead = 0o000004, // Other read
    OtherWrite = 0o000002, // Other write
    OtherExecute = 0o000001 // Other execute
}

export enum SFTPStatusCode {
    Ok = 0,
    EndOfFile = 1,
    NoSuchFile = 2,
    PermissionDenied = 3,
    Failure = 4,
    BadMessage = 5,
    NoConnection = 6,
    ConnectionLost = 7,
    OperationUnsupported = 8,
    InvalidHandle = 9,
    NoSuchPath = 10,
    FileAlreadyExists = 11,
    WriteProtect = 12,
    NoMedia = 13,
    NoSpaceOnFilesystem = 14,
    QuotaExceeded = 15,
    UnknownPrincipal = 16,
    LockConflict = 17,
    DirectoryNotEmpty = 18,
    NotADirectory = 19,
    InvalidFilename = 20,
    LinkLoop = 21
}
