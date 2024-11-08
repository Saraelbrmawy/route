import { Ui } from "./ui.module.js";

export class Details {

    constructor(){
        this.ui = new Ui();
       
    }


    async getMealsdetails() {
        const loading = document.querySelector(".loading");
        const details = document.querySelector(".details");
        loading.classList.remove("hidden");
        details.classList.remove("hidden");
        loading.classList.add("flex");
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const response = await api.json();
        const home = $(".home");
        home.click((e) => { 
            var strmeal = e.target.querySelector("p").innerHTML;
            const homy = document.querySelector(".home");
            homy.classList.add("hidden");
            for (let i = 0; i < response.meals.length; i++) {
                if (strmeal === response.meals[i]['strMeal']) {
                    let arr = response.meals[i];
                    this.ui.displaydetaillsmeals([arr]); 
                }
            }
        });
    }}
