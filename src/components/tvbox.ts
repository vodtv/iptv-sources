import fs from "fs"
import path from "path"
import { ITvBoxLiveSrc, ITvBoxJson, ITvBoxLiveChannel, ITvBoxLive } from "../types"
import { get_custom_url } from "../utils"

const gen_tvbox_json = (srcs: ITvBoxLiveSrc[], group?: string): ITvBoxJson => {
  if (srcs.length < 1) {
    throw new Error("No sources for tvbox found!")
  }
  const j = {
    lives: [],
  } as ITvBoxJson
  const live = {
    group: !!group ? group : srcs[0].name,
    channels: srcs.map(
      ({ name, f_name }) =>
      ({
        name,
        urls: [`${get_custom_url()}/txt/${f_name}.txt`],
      } as ITvBoxLiveChannel)
    ),
  } as ITvBoxLive
  j.lives.push(live)
  return j
}

export const writeTvBoxJson = (
  f_name: string,
  srcs: ITvBoxLiveSrc[],
  group?: string
) => {
  const tvbox_p = path.resolve("dist", "tvbox")
  if (!fs.existsSync(tvbox_p)) {
    fs.mkdirSync(tvbox_p)
  }
  fs.writeFileSync(
    path.join(tvbox_p, `${f_name}.json`),
    JSON.stringify(gen_tvbox_json(srcs, group))
  )
}
