import fs from "fs";
import path from "path";
import type { TEPGSource } from "../types"
import { handle_m3u, get_from_info } from "../utils"

export interface IREADMESource {
  name: string
  f_name: string
  count?: number | undefined
}

export type TREADMESources = IREADMESource[]
export type TREADMEEPGSources = TEPGSource[]

export const updateChannelList = (
  name: string,
  f_name: string,
  m3u: string
) => {
  const list_temp_p = path.join(path.resolve(), ".readme", "LIST.temp.md");
  const list = fs.readFileSync(list_temp_p, "utf8").toString();

  const m3uArray = handle_m3u(m3u);
  const channelRegExp = /\#EXTINF:-1([^,]*),(.*)/;
  let i = 1;
  let channels: Array<string>[] = [];
  while (i < m3uArray.length) {
    const reg = channelRegExp.exec(m3uArray[i]) as RegExpExecArray;
    channels.push([reg[2].replace(/\|/g, "").trim(), m3uArray[i + 1]]);
    i += 2;
  }

  const after = list
    .replace(
      "<!-- list_title_here -->",
      `# List for **${name}**\n\n> M3U: <https://iptv.vodtv.cn/${f_name}.m3u>, TXT: <https://iptv.vodtv.cn/txt/${f_name}.txt>`
    )
    .replace(
      "<!-- channels_here -->",
      `${channels
        .map(
          (c, idx) =>
            `| ${idx + 1} | ${c[0].replace("|", "")} | [${c[0].replace(
              "|",
              ""
            )}](${c[1]}) |`
        )
        .join("\n")}\n\nUpdated at **${new Date()}**`
    );

  const list_p = path.join(path.resolve(), "data", "list");

  if (!fs.existsSync(list_p)) {
    fs.mkdirSync(list_p);
  }

  fs.writeFileSync(path.join(list_p, `${f_name}.list.md`), after);
};

export const updateReadme = (
  sources: TREADMESources,
  counts: Array<number | undefined>
) => {
  const readme_temp_p = path.join(path.resolve(), ".readme", "README.temp.md");
  const readme = fs.readFileSync(readme_temp_p, "utf8").toString();

  const after = readme
    .replace(
      "<!-- channels_here -->",
      `${sources
        ?.map(
          (d, idx) =>
            `| ${d.name} | <https://iptv.vodtv.cn/${d.f_name
            }.m3u> <br> <https://iptv.vodtv.cn/txt/${d.f_name}.txt> | [List for ${d.name
            }](https://iptv.vodtv.cn/list/${d.f_name}.list) | ${counts[idx] === undefined ? "update failed" : counts[idx]
            } |`
        )
        .join("\n")}`
    )
    .replace(
      "<!-- updated_here -->",
      `- Auto Updated M3U  AT **${new Date()}**`
    );
  if (!fs.existsSync(path.join(path.resolve(), "data"))) {
    fs.mkdirSync(path.join(path.resolve(), "data"));
  }
  fs.writeFileSync(path.join(path.resolve(), "data", "README.md"), after);
  fs.writeFileSync(path.join(path.resolve(), "README.md"), after);
};