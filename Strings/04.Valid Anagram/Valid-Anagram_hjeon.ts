function isAnagram(s: string, t: string): boolean {
  let sArr: string[] = s.split('');
  let tArr: string[] = t.split('');
  let tIdx: number;
  
  for (let i = 0; i < sArr.length; i++)
    if ((tIdx = tArr.indexOf(sArr[i])) !== -1) {
      tArr.splice(tIdx, 1);
      sArr.splice(i--, 1);
    }
  for (let i = 0; i < tArr.length; i++)
    if ((tIdx = sArr.indexOf(tArr[i])) !== -1) {
      sArr.splice(tIdx, 1);
      tArr.splice(i--, 1);
    }
  if (0 < sArr.length || 0 < tArr.length) return (false);
  else return (true);
};

console.log(isAnagram('anagram', 'nagaram'))