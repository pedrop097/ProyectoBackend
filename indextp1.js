class User {
    constructor(name, lastname, books, pets) {
      this.name = name;
      this.lastname = lastname;
      this.books = books;
      this.pets = pets;
    }
    getFullName(name, lastname) {
      return `Nombre completo: ${name}, ${lastname}`;
    }
addPet(newPet){
    this.pets.push(newPet)
}
petsCount(){
    return this.pets.length;
}
addBook(name, autor){
    this.books.push({name, autor});
}
getBooksName(){
    return this.books.map(({name})=> name)
}
}
let pets = ["perro", "gato"]
let books = [
    {name: "Harry Potter",
    autor: "J.K. Rowling"
},
{
    name: "Señor de los anillos",
    autor: "J.R.R. Tolkien"
},
];
let user = new User("Pedro", "Palacios", books, pets);
user.addPet("mono");
user.addBook("Bajo un cielo blanco", "Elizabeth Kolbert");

console.log(user);
console.log(`Cantidad de mascotas: ${user.petsCount()}`)
console.log(user.getBooksName())