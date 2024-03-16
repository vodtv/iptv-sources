import path from "path"
import fs from "fs"

import { get_custom_url } from "../utils"
import type { TChannelsSources, IChannelsResult } from "../types";

export const updateChannelsJson = (
  sources: TChannelsSources,
  sources_res: Array<[string, number | undefined]>,
  epgs: TChannelsSources
) => {
  const json_p = path.resolve("dist", "channels.json")
  const url = get_custom_url()

  const result: IChannelsResult = {
    builderVersion: 1,
    channels: sources?.map((source, idx) => ({
      name: source.name,
      m3u: `${url}/${source.f_name}.m3u`,
      count: sources_res?.[idx]?.[1],
    })),
    epgs: epgs?.map((epg) => ({
      name: epg.name,
      epg: `${url}/epg/${epg.f_name}.xml`,
    })),
    updated_at: new Date().getTime(),
  }

  if (!fs.existsSync(path.resolve("dist"))) {
    fs.mkdirSync(path.resolve("dist"))
  }

  fs.writeFileSync(json_p, JSON.stringify(result))
}
