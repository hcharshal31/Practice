//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}

	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
	get getSpecies(){
		return this.species;
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
