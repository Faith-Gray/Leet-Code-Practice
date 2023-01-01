// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Constraints:
//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.
// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sSort = s.split('').sort().join('');
    let tSort = t.split('').sort().join('');
 
    return sSort === tSort;
};

// Time Complexity: NlogN + MlogM

// On my first attempt at this problem I used .split to make the strings arrays but I used the .sort method as though I was sorting a string. Like this: s.sort(function(a, b){return a - b})  That's incorrect
// 

//Faster Solution
// Use a hash map to find the amount of each letter/number in the string 
// then check if the tables are equal to see if they are anagrams