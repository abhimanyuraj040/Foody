import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  // get all the tag models instances
  getAllTags(): Tag[] {
    // literals gonna be calculated by the server
    return [
      { name: "All", count: 14 },
      { name: "Breakfast", count: 4 },
      { name: "Pizza", count: 2 },
      { name: "Lunch", count: 3 },
      { name: "Snacks", count: 2 },
      { name: "Burger", count: 1 },
      { name: "Dinner", count: 1 },
      { name: "Soup", count: 1 },
    ];
  }

  // get the foods filtered by tags
  getAllFoodsByTag(tag: string): Food[] {
    if (tag === "All") {
      return this.getAll();
    } else {
      return this.getAll().filter((food) => food.tags?.includes(tag));
    }
  }

  // get the foods filtered by search terms
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // get all food models instances
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Pepperoni Pizza",
        cookTime: "20-30",
        price: 220,
        favorite: false,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: "/assets/images/PeppPizza.jpg",
        tags: ["Dinner", "Pizza", "Lunch"],
      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 160,
        cookTime: "20-30",
        favorite: true,
        origins: ["india", "middle east"],
        stars: 4.7,
        imageUrl: "/assets/images/ChickenBiryani.jpg",
        tags: ["Dinner", "Lunch"],
      },
      {
        id: 3,
        name: "Burger",
        price: 95,
        cookTime: "10-15",
        favorite: false,
        origins: ["germany", "us"],
        stars: 3.5,
        imageUrl: "/assets/images/Burger.jpg",
        tags: ["Breakfast", "Burger"],
      },
      {
        id: 4,
        name: "French Fries",
        price: 89,
        cookTime: "15-20",
        favorite: true,
        origins: ["belgium", "france"],
        stars: 3.3,
        imageUrl: "/assets/images/FrenchFries.jpg",
        tags: ["Stacks"],
      },
      {
        id: 5,
        name: "Chicken Soup",
        price: 140,
        cookTime: "40-50",
        favorite: false,
        origins: ["india", "asia"],
        stars: 3.0,
        imageUrl: "/assets/images/ChickenSoup.jpg",
        tags: ["Soup"],
      },
      {
        id: 6,
        name: "Veg-Loaded Pizza",
        price: 120,
        cookTime: "40-50",
        favorite: false,
        origins: ["italy"],
        stars: 4.0,
        imageUrl: "/assets/images/VegLoadedPizza.jpg",
        tags: ["Dinner", "Pizza", "Lunch"],
      },
    ];
  }
}
