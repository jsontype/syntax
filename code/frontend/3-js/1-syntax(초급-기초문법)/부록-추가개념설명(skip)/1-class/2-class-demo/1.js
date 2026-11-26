class Dog {
  constructor(name, age, color, dogType) {
    this.name = name
    this.age = age
    this.color = color
    this.dogType = dogType
    // 裏で入れる
    this.animalType = "pet"
  }

  cry() {
    console.log("Bark Bark!")
  }
}

class Wolf {
  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
    // 裏で入れる
    this.animalType = "wild"
  }

  // 裏で入れる
  cry() {
    console.log("Owwww!")
  }
  attack() {
    console.log("Grrrrr")
  }
}

const yang = new Wolf("yang", 38, "black")
console.log(yang)
yang.cry()
yang.attack()

const tamaki = new Dog("tamaki", 30, "orange", "pug")
console.log(tamaki)
tamaki.cry()
console.log("type:", tamaki.animalType)
