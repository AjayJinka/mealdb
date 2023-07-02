import { VIDEO_EMBED_URL } from "../../utils/constants";

const Video = ({ mealInfo }) => {
  const { strYoutube } = mealInfo;
  const videoId = new URL(strYoutube).searchParams.get("v");
  return (
    <div className="p-1">
      <iframe
        width="642"
        height="361"
        src={`${VIDEO_EMBED_URL}${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Video;
