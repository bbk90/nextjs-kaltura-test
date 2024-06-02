import { useEffect, useRef } from "react";
import kalturaConfig from "../../kalturaConfig";

export default function KalturaPlayer() {
  useEffect(() => {
    if (window?.KalturaPlayer) {
      let player = window.KalturaPlayer.setup({
        targetId: kalturaConfig.targetId,
        provider: {
          partnerId: kalturaConfig.partnerId,
          uiConfId: kalturaConfig.uiConfId,
          entryId: kalturaConfig.entryId,
        },
        playback: {
          autoplay: true,
        },
      });

      player.loadMedia({ entryId: kalturaConfig.entryId });

      return () => {
        if (player) {
          player.destroy();
        }
      };
    }
  }, []);

  return (
    <div id={kalturaConfig.targetId} style={{ width: 600, height: 300 }} />
  );
}
