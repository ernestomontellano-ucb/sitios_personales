let isPlaying = false;
const iframe = document.getElementById("youtubeAudio");
const btn = document.getElementById("playPauseBtn");

function togglePlayPause() {
    iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: isPlaying ? "pauseVideo" : "playVideo", args: "" }),
        "*"
    );
    isPlaying = !isPlaying;
    btn.innerHTML = isPlaying ? "⏸️ Pausar" : "▶️ Reproducir";
}

btn.addEventListener("click", togglePlayPause);
