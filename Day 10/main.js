function sortByLength(strs) {
    //  write code here.
    return strs.sort((a, b) => {
        return a.length - b.length;
        //additional sort -> sort by dictionary
        // return a.length - b.length || a.localeCompare(b);;
    });
}



/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});