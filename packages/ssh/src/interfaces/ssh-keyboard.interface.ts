export interface SSHKeyboardInteractiveCallback {
    (prompts: SSHKeyboardInteractivePrompt[]): Promise<string[]>;
}

export interface SSHKeyboardInteractivePrompt {
    text: string;
    echo: boolean;
}
