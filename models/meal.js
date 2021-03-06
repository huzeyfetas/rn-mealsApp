class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGulutenFree,
    isVegan,
    isVegetarion,
    isLactoseFree,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGulutenFree = isGulutenFree;
    this.isVegan = isVegan;
    this.isVegetarion = isVegetarion;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
