function isPalindrome(s: string): boolean {
	let original : string[] = s.split('').filter(c => c.match(/[0-9a-zA-Z]/)).map(c => c.toLowerCase());
	let reversed : string[] = [...original].reverse();

	if (!s || original.join() === reversed.join()) return true;
	else return (false);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
