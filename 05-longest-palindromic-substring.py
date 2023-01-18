class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ''
        
        def checkString(l, r, res, resLen):
            while (l >=0 and r < len(s) and s[l] == s[r]):
                if (r-l+1 > resLen):
                    res = s[l:r+1]
                    resLen = r-l+1
                l -= 1
                r += 1
            return res

        for i in range(len(s)):
            l,r = i,i
            res = checkString(l,r, res, len(res))


            l,r = i,i+1
            res = checkString(l,r, res, len(res))

        return res
