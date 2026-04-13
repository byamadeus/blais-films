function VideoPlayer({ vimeoUrl, muxId, youtubeUrl }) {
  // 1. Handle Mux
  if (muxId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          className="w-full h-full object-cover"
          controls
          src={`https://stream.mux.com/${muxId}.m3u8`}
        />
      </div>
    );
  }

  // 2. Handle Vimeo
  if (vimeoUrl) {
    // Extract ID and Hash if present (Vimeo unlisted links often have a hash)
    const vimeoId = vimeoUrl.split('/').pop();
    const embedUrl = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0`;
    
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo Video"
        ></iframe>
      </div>
    );
  }

  // 3. Handle YouTube
  if (youtubeUrl) {
    const ytId = youtubeUrl.split('v=')[1] || youtubeUrl.split('/').pop();
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${ytId}?modestbranding=1&rel=0`}
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return null;
}