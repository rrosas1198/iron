export enum ChannelWindow {
    WindowDefault = 2 * 1024 * 1024, // 2MB
    MinAdjust = 1024 // 1KB
}

export enum ChannelPacket {
    PacketDefault = 32768 // 32KB
}

export enum ChannelStreamId {
    StreamStdout = 0,
    StreamStderr = 1
}

export enum ChannelExtendedData {
    ExtendedDataNormal = 0,
    ExtendedDataIgnore = 1,
    ExtendedDataMerge = 2
}
