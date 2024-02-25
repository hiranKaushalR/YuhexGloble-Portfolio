import React from "react";
import { team } from "../../constants";

function AboutTeam() {
  return (
    <div className="text-white">
      <h1 className="text-3xl  font-bold text-center py-6">Meet the Team</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {team.map((member) => (
          <div
            id={member.id}
            className="bg-cardBG p-2 rounded-lg flex flex-col gap-y-4 text-black cursor-pointer"
          >
            <img
              src={member.avatar}
              alt="avatar"
              className="w-[230px] rounded-lg bg-cover"
            />
            <div>
              <h1 className="font-semibold text-xl">{member.name}</h1>
              <h3 className="text-sm">{member.role}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
