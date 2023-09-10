import type { APISpaceXResponse, Doc } from "../../types/api";

export async function getLatestLaunches() {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });

  const { docs } = (await res.json()) as APISpaceXResponse;

  return docs;
}
export async function getLaunchBy({ id }: { id: string }) {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launch = (await res.json()) as Doc;

  return launch;
}
