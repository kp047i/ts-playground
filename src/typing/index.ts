import typingParseDictionary from "./romanTypingParseDictionary.json";

const parseMap = typingParseDictionary.reduce(
  (map, { Pattern, TypePattern }) => map.set(Pattern, TypePattern),
  new Map<string, string[]>()
);

const sentence = "はんにゃしんぎょう";
let index = 0;

while (index < sentence.length) {
  const mono = sentence.at(index);
  const di =
    index + 1 < sentence.length ? sentence.slice(index, index + 2) : "";
  const tri =
    index + 2 < sentence.length ? sentence.slice(index, index + 3) : "";
  console.log(mono, di, tri);

  if (parseMap.has(tri)) {
    console.log("tri");
  } else if (parseMap.has(di)) {
    console.log("di");
  } else {
    console.log("mono");
  }
  index++;
}
