// types/kaltura.d.ts
interface KalturaPlayer {
  setup(options: KalturaPlayerOptions): KalturaPlayerInstance;
}

interface KalturaPlayerOptions {
  targetId: string;
  provider: {
    partnerId: string;
    uiConfId: string;
    entryId: string;
  };
  playback?: {
    autoplay?: boolean;
  };
}

interface KalturaPlayerInstance {
  loadMedia(mediaOptions: { entryId: string }): void;
  destroy(): void;
}

// Extend the global Window interface
interface Window {
  KalturaPlayer: KalturaPlayer;
}
