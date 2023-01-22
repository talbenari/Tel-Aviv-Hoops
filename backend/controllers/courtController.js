const courtSchema = require("../Schema/userSchema");


module.exports = {
    CreateCourt: (req, res) => {
        const { players_capacity, town, Postdate, name, courtOwner,address } = req.body;
        courtSchema.findOne({ name: name }).then((court) => {
            console.log(court);
            if (court == null) {
                const court = new courtSchema({
                    players_capacity,
                    town,
                    Postdate,
                    name,
                    courtOwner,
                    address
                });
                court.save().then(() => {
                    res.status(200).json({
                        message: "Court saved successfully!",
                        data: court?._id,
                    });
                });
            } else {
                res.status(200).json({
                    message: "Sorry, Court Taken",
                });
            }
        });
    },
    AddEvent: (req, res) => {
        const {courtId, players, date, numberOfPlayers} = req.body;
        courtSchema
            .findOne({_id: courtId})
            .then((court) => {
                court.events.unshift({
                        id, //needs to generate id
                        players,
                        date,
                    numberOfPlayers
                    }
                )
            })
    } // add print all courts

}
