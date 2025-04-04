import { Episode } from "@killtony/core/episode/episode";
import { Guest } from "@killtony/core/guest/guest";

import { createServerFn } from "@tanstack/start";

export const guestByEpisodeId = createServerFn(
  "GET",
  async (episodeId: number) => {
    return Guest.byEpisodeId(episodeId);
  }
);

export const episodeByYoutubeId = createServerFn(
  "GET",
  async (youtubeId: string) => {
    return Episode.byYoutubeId(youtubeId);
  }
);

export const listEpisodes = createServerFn(
  "GET",
  async (params?: Episode.ListParams) => {
    return Episode.list(params ?? {});
  }
);
