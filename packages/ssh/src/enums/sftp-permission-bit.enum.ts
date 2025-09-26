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
