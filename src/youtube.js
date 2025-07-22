import axios from 'axios';

export async function addToYoutubePlaylist(url, env) {
  const apiKey = env.YOUTUBE_KEY;
  if (!apiKey) {
    throw new Error('The YOUTUBE_API_KEY environment variable is required.');
  }
  const playlistId = 'PLP65b_F1zUXl26fhoE2vDI3eAH16BsnCr';
  const videoId = url.split('v=')[1];
  if (!videoId) {
    throw new Error('Invalid YouTube URL. Please provide a valid video URL.');
  }
  url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apiKey}`;
  const body = {
    snippet: {
      playlistId: playlistId,
      resourceId: {
        kind: 'youtube#video',
        videoId: videoId,
      },
    },
  };
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        message: 'Video added to playlist successfully.',
        data: response.data,
      };
    } else {
      throw new Error(
        `Failed to add video to playlist. Status code: ${response.status}. Response: ${JSON.stringify(response.data)}`,
      );
    }
  } catch (error) {
    throw new Error(`Error adding video to playlist: ${error.message}`);
  }
}
