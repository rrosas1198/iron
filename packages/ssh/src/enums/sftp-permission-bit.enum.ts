/**
 * SFTP permission bits for file types and special files.
 * These correspond to Unix file type bits and libssh2 constants (LIBSSH2_SFTP_S_IF*).
 * Used in file attribute operations to identify file types.
 * See: https://github.com/libssh2/libssh2/blob/master/include/libssh2_sftp.h
 */
export enum SFTPPermissionBit {
    /**
     * File type mask.
     * Used to extract the file type from the permissions field.
     * LIBSSH2_SFTP_S_IFMT
     */
    FileTypeMask = 0o170000, // File type mask
    /**
     * FIFO special file.
     * LIBSSH2_SFTP_S_IFIFO
     */
    Fifo = 0o010000, // FIFO
    /**
     * Character special file.
     * LIBSSH2_SFTP_S_IFCHR
     */
    CharacterSpecial = 0o020000, // Character special
    /**
     * Directory.
     * LIBSSH2_SFTP_S_IFDIR
     */
    Directory = 0o040000, // Directory
    /**
     * Block special file.
     * LIBSSH2_SFTP_S_IFBLK
     */
    BlockSpecial = 0o060000, // Block special
    /**
     * Regular file.
     * LIBSSH2_SFTP_S_IFREG
     */
    RegularFile = 0o100000, // Regular file
    /**
     * Symbolic link.
     * LIBSSH2_SFTP_S_IFLNK
     */
    SymbolicLink = 0o120000, // Symbolic link
    /**
     * Socket file.
     * LIBSSH2_SFTP_S_IFSOCK
     */
    Socket = 0o140000 // Socket
}
