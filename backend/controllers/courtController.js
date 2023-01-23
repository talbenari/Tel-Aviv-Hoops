const courtSchema = require("../Schema/courtSchema");
const {v4: uuidv4} = require('uuid');

module.exports = {
    CreateCourt: (req, res) => {
        const {players_capacity, town, Postdate, name, courtOwner, address} = req.body;
        courtSchema.findOne({name: name}).then((court) => {
            console.log(court);
            if (court == null) {
                const court = new courtSchema({
                    players_capacity,
                    town,
                    Postdate,
                    name,
                    courtOwner,
                    address,

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
        })
    },
    AddEvent: (req, res) => {
        const {courtId, players, date, numberOfPlayers} = req.body;
        courtSchema
            .findOne({_id: courtId})
            .then((court) => {

                court.events.unshift({
                        id: uuidv4(),
                        players,
                        date,
                        numberOfPlayers
                    }
                )
                court.save()
                res.status(200).json({
                    message: "added!",
                    id: this.id
                })
            })
    },
    CourtPrint: (req, res) => {
        courtSchema
            .find()
            .then((court) => {
                res.status(200).json({
                    message: court
                })

            })
    },
    EventPrint: (req, res) => {
        const {courtId} = req.body;
        let data = []
        courtSchema
            .findOne({_id: courtId})
            .then((court) => {
                try {
                    court.events.map((singleevent) => {
                            data.push(singleevent)
                        }
                    )
                    res.status(200).json({
                        court: court,
                        events: data
                    })
                } catch (err) {
                    res.status(400).json({
                        message: err,
                    })
                }

            })

    }

}
