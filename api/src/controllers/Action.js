
class Action {
    constructor() { }

    invertText = async (req, res) => {
        const text = req.query
        console.log(text)
        try {
            if (text) {
                var stringLower = text.text.toLowerCase()
                var stringSplited = stringLower.split(""); 
                var arrayReversed = stringSplited.reverse(); 
                var arrayReJoined = arrayReversed.join("");
                if(arrayReJoined === text.text) {
                    return res.status(200).json({text: arrayReJoined, palindrome: true, oldText: text.text});
                } 
                return res.status(200).json({text: arrayReJoined, palindrome: false, oldText: text.text});
            } else res.status(404).send({ msgE: 'Invalid parameter' })
        } catch (error) { 
            console.log(error)
            return res.status(400).json({error: "no text"});
         }
    }
}

module.exports = Action;
