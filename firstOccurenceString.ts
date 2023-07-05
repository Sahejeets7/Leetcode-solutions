function strStr(haystack: string, needle: string): number { 

    /**
    * both strings same length, then just compare and return result
     general case - haystack > needle str m and n
     if needle > haystack -> return -1
     needle = 1, then find first time that letter occurs
     */

    // bsebutsad 
    //  bs[ebu]tsad

    const m = haystack.length;
    const n = needle.length;

    let str = '';
    let start = 0;
    if(m === n){
        return haystack == needle ? 0 : -1
    }
    if(n > m) return -1;

    for (let index = 0; index < m; index = index + 1){
        // always remember, index "m"" mean "m" chars before!
        str += haystack[index];
        
        // check - truthy
        if(str.length === n && str == needle){
            return start;
        }
        // str = // last 2 chars + next from parent string
        // window size = 3 aka n

        // check - falsy
        if(str.length === n){
            str = str.slice(1);
            start = start + 1
        }
    }
    return -1;
};
