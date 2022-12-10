import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  jsontype: {
    name: "yang",
    description:
      "FE Engineer, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate doloremque amet suscipit in eaque, dicta atque recusandae id repudiandae consectetur, quisquam et dolorum nostrum pariatur est commodi. Labore, temporibus earum.",
  },
  kimss: {
    name: "kim",
    description:
      "BE Engineer, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, quasi rem nemo similique commodi tenetur dolores dolorem facilis ab, incidunt placeat corrupti adipisci dolorum debitis vel soluta hic quo repudiandae!",
  },
};

export default function profile() {
  const params = useParams();
  const username = params.username;

  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}
