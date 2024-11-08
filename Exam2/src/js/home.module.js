import { Details } from "./detail.module.js";
import { Ui } from "./ui.module.js";

export class home {
   constructor() {
      this.ui = new Ui();
      this.getMeals()
      this.closeSidebar()
      this.callcaterogy()
      this.callArea()
      this.callIngr()
      this.callcataarea()
      const details = new Details();
      
      
   }


   closeSidebar(){
      let leftside= $(".sidleft").innerWidth()
      $(".sidebar").animate({left:-leftside},0)
      $(".fa-bars").click(function() {
         let marker= document.getElementById("marker")
         let sidebarleftvalue =$(".sidebar").css("left");
         if (sidebarleftvalue=="0px"){
            $(".sidebar").animate({left:-leftside},500);
         
            
            marker.classList.remove("fa-xmark")
            marker.classList.add("fa-bars")
            
         }

      else{
            $(".sidebar").animate({left:0},500);
            marker.classList.remove("fa-bars")
            marker.classList.add("fa-xmark")   
      }  
      })
   }

   async getMeals() {
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const response = await api.json();
      this.ui.displayDatameals(response.meals);
      loading.classList.add("hidden");
      loading.classList.remove("flex");
   }

   closeSidebarbydefult(){
      let marker= document.getElementById("marker")
      let sidebarleftvalue =$(".sidebar").css("left");
      console.log(sidebarleftvalue)
      if (sidebarleftvalue!="0px"){
         $(".sidebar").animate({left:0},500);
         marker.classList.remove("fa-bars")
         marker.classList.add("fa-xmark") 
      }
   }
  callcataarea(){
   document.querySelector('.Ingredients').addEventListener('click', () => {
     this.closeSidebarbydefult()
  });
  }


   async getCategory() {
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      const details = document.querySelector(".details");
      details.classList.add("hidden");
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const response = await api.json();
      this.ui.displayCatrgory(response.categories);
      loading.classList.add("hidden");
      loading.classList.remove("flex");
      const categories = document.querySelectorAll(".CatEgory");
      categories.forEach(category => {
      category.addEventListener('click', (e) => {
      const catParagraph = category.querySelector(".cat").innerHTML;
      this.getCategoryMeals(catParagraph)
    });
     });
   }

 


  async callcaterogy(){
      const Categories = document.querySelector(".Categories");
      Categories.addEventListener("click", () => this.getCategory()); 
   }


  async getCategoryMeals(cat){
   const loading = document.querySelector(".loading");
   loading.classList.remove("hidden");
   loading.classList.add("flex");
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
   response = await response.json()
   const homy = document.querySelector(".home");
   this.ui.displayDatameals(response.meals)
   homy.classList.remove("hidden");
   loading.classList.add("hidden");
   loading.classList.remove("flex");
   const Categories = document.querySelector(".Categories");
   console.log(response)
   this.ui.displaydetaillsmeals(response.meals)
   }



  



   async getArea() {
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      const details = document.querySelector(".details");
      details.classList.add("hidden");
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const response = await api.json();
      console.log(response.meals)
      this.ui.displayArea(response.meals);
      loading.classList.add("hidden");
      loading.classList.remove("flex");
      const area = document.querySelectorAll(".area");
      area.forEach(areaA => {
      areaA.addEventListener('click', (e) => {
      const areaParagraph = areaA.querySelector(".parea").innerHTML;
      this.getAreaMeals(areaParagraph)
    });
     });
   }

   async callArea(){
      const Area  = document.querySelector(".Area");
      Area.addEventListener("click", () => this. getArea()); 
   }


   async getAreaMeals(area){
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      response = await response.json()
      const homy = document.querySelector(".home");
      this.ui.displayDatameals(response.meals)
      homy.classList.remove("hidden");
      loading.classList.add("hidden");
      loading.classList.remove("flex");
      console.log(response)
      }




   async getIngr() {
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      const details = document.querySelector(".details");
      details.classList.add("hidden");
      const api = await fetch('https:www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await api.json();
     
      this.ui.displayIngr(response.meals);
      loading.classList.add("hidden");
      loading.classList.remove("flex");
      const Ingredients= document.querySelectorAll(".ingredient");
      Ingredients.forEach(ingr => {
      ingr.addEventListener('click', (e) => {
      const IngrParagraph = ingr.querySelector(".pIng").innerHTML;
      console.log(IngrParagraph)
      this.getIngrMeals(IngrParagraph)
    });
     });
   }

   async callIngr(){
      const Ingrdient  = document.querySelector(".Ingredients");
      Ingrdient.addEventListener("click", () => this. getIngr()); 
   }
  


   async getIngrMeals(ingr){
      const loading = document.querySelector(".loading");
      loading.classList.remove("hidden");
      loading.classList.add("flex");
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingr}`)
      response = await response.json()
      const homy = document.querySelector(".home");
      this.ui.displayDatameals(response.meals)
      homy.classList.remove("hidden");
      loading.classList.add("hidden");
      loading.classList.remove("flex");
      console.log(response)
      }


      async getMealDetails(mealID) {
         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
         response = await response.json();
     
         console.log(response.meals[0]['idMeal']);
         this.ui.displaydetaillsmeals([response.meals[0]]);
     }
     

}




