let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

contacts.push(
    {
        name: "Maisie Haley",
        phone: "0913 531 3030",
        email: "risus.Quisque@urna.ca"
    }
)

console.log(`First: name=${contacts[0].name}, phone=${contacts[0].phone}, email=${contacts[0].email}`)
console.log(`Last: name=${contacts[contacts.length - 1].name}, phone=${contacts[contacts.length - 1].phone}, email=${contacts[contacts.length - 1].email}`)