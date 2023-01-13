export default function handler(req, res) {
  res.status(200).json([
    {
      char_id: 4,
      name: "Walter White Jr.",
      birthday: "07-08-1993",
      occupation: ["Teenager"],
      img: "https://web.archive.org/web/20220811172853/https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
      status: "Alive",
      nickname: "Flynn",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "RJ Mitte",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]);
}
