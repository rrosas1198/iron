export enum HostKeyHashType {
    MD5 = 1,
    SHA1 = 2,
    SHA256 = 3
}

export enum HostKeyAlgorithm {
    Unknown = 0,
    Rsa = 1,
    Dss = 2, // deprecated
    Ecdsa256 = 3,
    Ecdsa384 = 4,
    Ecdsa521 = 5,
    Ed25519 = 6
}
