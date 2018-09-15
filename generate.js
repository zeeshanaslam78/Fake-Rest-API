module.exports = function() {

    var faker = require("faker");
    var lodash = require("lodash");
    return {
        people: lodash.times(100, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone_number: faker.phone.phoneNumber(),
                avatar: faker.internet.avatar(),
                profileImage: faker.image.people(640, 480, true)
                /*id: n,
                users: faker.helpers.createCard()*/
            }
        })
    }
}