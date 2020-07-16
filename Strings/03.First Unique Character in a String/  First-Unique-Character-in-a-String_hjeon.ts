function firstUniqChar(s: string): number {
  let map: Map<string, number> = new Map();
  let entries: IterableIterator<[string, number]>;
  let entry: IteratorResult<[string, number]>;

  for (let c of s) {
    if (!map.has(c)) map.set(c, 1);
    else map.set(c, <number>map.get(c) + 1);
  }
  entries = map.entries();
  while (!(entry = entries.next()).done)
    if (entry.value[1] === 1)
      return (s.indexOf(entry.value[0]));
  return (-1);
};

console.log(firstUniqChar('leetcode'));