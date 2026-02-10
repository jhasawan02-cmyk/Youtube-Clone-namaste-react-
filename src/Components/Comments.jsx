import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommentCount } from "../utils/appSlice";

function Comments({ commentVideoID }) {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  const totalComments = useSelector(
    (store) => store.app.commentCount
  );

  useEffect(() => {
    if (!commentVideoID) return;

    const commentThread = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${commentVideoID}&maxResults=20&key=${import.meta.env.VITE_API_KEY}`
        );

        const commentJson = await response.json();

        if (commentJson?.items) {
          setComments(commentJson.items);

          // ✅ real total comments from API
          dispatch(
            setCommentCount(commentJson.pageInfo.totalResults)
          );
        }
      } catch (error) {
        console.error("Comments Fetch Error:", error);
      }
    };

    commentThread();
  }, [commentVideoID, dispatch]);

  return (
    <div className="flex flex-col gap-2">

      {/* ✅ Heading Added */}
      <h3 className="text-lg font-bold mb-2">
        {totalComments || 0} Comments
      </h3>

      {comments.map((item) => {
        const snippet =
          item?.snippet?.topLevelComment?.snippet;

        const authorProfileImageUrl =
          snippet?.authorProfileImageUrl;

        const authorDisplayName =
          snippet?.authorDisplayName;

        const textDisplay = snippet?.textDisplay;

        return (
          <div
            key={item.id}
            className="flex gap-2 items-start p-1.5 shadow-md bg-white rounded-md"
          >
            <img
              src={authorProfileImageUrl}
              className="w-10 h-10 rounded-full shrink-0 bg-gray-200"
              alt={authorDisplayName}
              onError={(e) => {
                e.target.src =
                  "https://www.gstatic.com/youtube/img/originals/pwa/logo_120.png";
              }}
            />

            <div className="flex flex-col min-w-0 px-1">
              <span className="font-bold text-sm text-gray-900">
                @{authorDisplayName}
              </span>

              <p
                className="text-sm wrap-break-words leading-relaxed px-4 bg-gray-50 rounded-md"
                dangerouslySetInnerHTML={{
                  __html: textDisplay,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
