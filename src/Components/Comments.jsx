import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

function Comments() {
  const [comments, setComments] = useState([]);
  const [searchParam] = useSearchParams();
  const commentVideoID = searchParam.get("v");

 useEffect(() => {
    if (!commentVideoID) return;
    setComments([]);

    const commentThread = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${commentVideoID}&key=${VITE_API_KEY}`
        );
        const commentJson = await response.json();
        if (commentJson.items) {
          setComments(commentJson.items);
        } else {
          setComments([]);
          console.warn("No comments found or comments disabled for this video.");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    commentThread();
  }, [commentVideoID]);
  const commentCount = comments.length;

  return (
    <div className="w-full border rounded-xl bg-white shadow-sm  text-gray-600 ">
      <h2 className="font-bold text-xl mb-6 border-b p-2 text-black">
        Comments ({commentCount})
      </h2>

      <div className="space-y-6 p-2">
        {comments.map((item) => {
          const { authorDisplayName, textDisplay, authorProfileImageUrl } =
            item.snippet.topLevelComment.snippet;

          return (
            <div
              key={item.id}
              className="flex gap-2 items-start p-1.5 shadow-md "
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
                  className="text-sm wrap-break-words leading-relaxed px-4 bg-gray-50"
                  dangerouslySetInnerHTML={{ __html: textDisplay }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;

