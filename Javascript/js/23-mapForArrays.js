const users = ["AYSE", "Mehmet", "TugCE", "AkSEL"];

const newUsers = users.map(users => users.toLowerCase());
console.log(newUsers);

const user_obj = users.map(items => {
    return {
        username: items, shortName: `${items[0]}`,
        newName: `${items[0].toUpperCase()}${items.slice(1).toLowerCase()}`
    }
}
)
console.log(user_obj);

