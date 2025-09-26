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
