var fullJustify = function(words, maxWidth) {
    const res = [];

    for (let i = 0; i < words.length; ) {
        let lineLen = 0;
        let j = i;

        // 1️⃣ Pack words for the current line
        for (; j < words.length; j++) {
            // words length + minimum spaces between words
            if (lineLen + words[j].length + (j - i) > maxWidth) break;
            lineLen += words[j].length;
        }

        let spaces = maxWidth - lineLen;
        let gaps = j - i - 1;
        let line = "";

        // 2️⃣ Left-justified (last line OR single word)
        if (j === words.length || gaps === 0) {
            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) line += " ";
            }
            line += " ".repeat(maxWidth - line.length);
        }
        // 3️⃣ Fully justified
        else {
            let spaceEach = Math.floor(spaces / gaps);
            let extra = spaces % gaps;

            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) {
                    line += " ".repeat(spaceEach + (extra > 0 ? 1 : 0));
                    extra--;
                }
            }
        }

        res.push(line);
        i = j; // move to next line
    }

    return res;
};


const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;

console.log(fullJustify(words,maxWidth));
