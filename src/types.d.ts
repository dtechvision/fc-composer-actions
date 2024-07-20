type ComposerActionFormResponse = {
    type: 'form';   // Must be "form"
    title: string;  // e.g. "Create Poll," "Create Event," "New Bounty"
    url: string;    // Form URL to embed in client 
}

type ComposerActionState = {
  cast: { 
    parent?: string;  // Cast parent hash
    text: string;     // Cast text, can include @mentions
    embeds: string[]; // Embed URLs
}
}

type FrameMessage = {
    untrustedData: {
        fid: number; // User's FID
        url: string; // URL of the API endpoint
        messageHash: string; // Hash of the message
        timestamp: number; // Timestamp of the action
        network: number; // Network identifier
        buttonIndex: number; // Button index (always 1)
        state: string; // URL-encoded JSON state
    };
    trustedData: {
        messageBytes: string; // Message bytes
    };
};