import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Speaker } from "lucide-react";
export function PlayPauseButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <Button onClick={() => setIsPlaying(!isPlaying)}>
      {isPlaying && <Speaker />}
      {isPlaying ? "⏸ Pause" : "▶ Play"}
    </Button>
  );
}
