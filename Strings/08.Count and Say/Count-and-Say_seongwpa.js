var countAndSay = function(n) {
	let res = "1";
	for (let i = 1; i < n; i++)
	{
		let cnt = 1;
		let tmp = [];
		for (j = 0; j < res.length; j++)
		{
			if (res[j] == res[j + 1])
				cnt++;
			else
			{
				tmp.push(cnt);
				tmp.push(parseInt(res[j]));
				cnt = 1;
			}
		}
		res = tmp.join('');
	}
	return res;
};

/*
1	1
2	11
3	21
4	1211
5	111221
6	312211
7	13112221
8	1113213211
9	31131211131221
10	13211311123113112211
WTF....
*/
