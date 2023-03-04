
// fetch - bu ichki funksiyasi serverlardan sorov(Zapros) qabul qiladi.
// API  - application programm interface

// function api() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res=>res.json())
//         .then(users=>console.log(users))
//         .then(err => err)

// } api()

let body = document.querySelector('body');
let box = document.querySelector('.box');
async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await res.json()
        console.log(users);
        users.forEach(user => {
            let card = document.createElement('div')
            let div = document.createElement('div')
            let divs = document.createElement('div')
            divs.classList.add("contact")
            div.classList.add("card__info")
            card.classList.add("card")
            let h2 = document.createElement('h2')
            h2.classList.add("card__title")
            let p = document.createElement('p')
            p.classList.add("card__text")
            let phone = document.createElement('a')
            phone.classList.add('phone')
            let email = document.createElement('a')
            email.classList.add('email')
            phone.textContent= `phone: ${user.phone}`
            h2.textContent =`name: ${user.name}`
            email.textContent = `email: ${user.email}`
            p.textContent = `username: ${user.username}`
            div.append(h2)
            div.append(p)
            divs.append(phone)
            divs.append(email)
            div.append(divs)
            card.append(div)
            box.append(card)

        });
    } catch (error) {
        console.error("Ee bolakay san So'rovda xato qildinkuu ");
    }
}
getUsers()