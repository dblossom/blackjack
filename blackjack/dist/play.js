/**
 * An enum of a play to do
 */
var BJ;
(function (BJ) {
    (function (Play) {
        Play[Play["Hit"] = 0] = "Hit";
        Play[Play["Stand"] = 1] = "Stand";
        Play[Play["Double"] = 2] = "Double";
        Play[Play["Split"] = 3] = "Split";
    })(BJ.Play || (BJ.Play = {}));
    var Play = BJ.Play;
})(BJ || (BJ = {}));
