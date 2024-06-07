const API_KEY = "AIzaSyCXsl9xxTEujqze6-p4b3dffc2wA2FpMeM";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const GOOGLE_API_KEY = "AIzaSyDYDj8HiIJtcwepyJBESow6i0F_-qoWex0";
export const YOUTUBE_GET_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;
export function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
        return num; // if value < 1000, nothing to do
    }
}