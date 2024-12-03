"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecorder } from "../hooks/useRecorder";

export function SoundRecorder() {
  const { isRecording, duration, audioURL, startRecording, stopRecording } =
    useRecorder();

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Sound Recorder
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="text-4xl font-mono">{formatDuration(duration)}</div>
        <Button
          onClick={isRecording ? stopRecording : startRecording}
          className={`w-16 h-16 rounded-full ${
            isRecording
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRecording ? "Stop" : "Start"}
        </Button>
        {audioURL && (
          <audio controls src={audioURL} className="w-full mt-4">
            Your browser does not support the audio element.
          </audio>
        )}
      </CardContent>
    </Card>
  );
}
