

export class Ui {
   
    displayDatameals(data) {
        let mealsBox = ``;
        for (let i = 0; i < data.length; i++) {
           mealsBox += `
      <div click=""  class="meal-item rounded-xl relative group overflow-hidden" id="meal-item">
                <img src="${data[i]['strMealThumb']}" class="w-[100%] rounded-xl  img1 " alt="" >
                <div class="layer flex justify-start items-center absolute top-0  bottom-0    start-0 end-0 rounded-xl translate-y-[120%] group-hover:translate-y-[0] z-40 transition-all duration-[1s]">
                 <p class="font-[500] si text-[28px] leading-[33.6px]">${data[i]['strMeal']}</p>
                </div>
            </div>
           `;
         
        }
        document.getElementById("MealsData").innerHTML = mealsBox;
        document.getElementById("meal-item").addEventListener("click",function(){
           this.getMealDetails(data[i].idMeal)
            })
       
       
     }
    displayArea(data) {
        let areabox = ``;
        for (let i = 0; i < data.length; i++) {
           areabox += `
     <div class="flex flex-col mt-2 area">
           <i class="fa-solid fa-house-laptop fa-4x  text-white"></i>
           <p class="text-[28px] leading-9 mt-3 font-medium text-white parea">${data[i]['strArea']}</p>
           </div>
           `;
           
        }
  
        document.getElementById("MealsData").innerHTML = areabox;
       
     }
    displayIngr(data) {
        let Ingrbox = ``;
        for (let i = 0; i < 20; i++) {
           Ingrbox += `
    <div class="flex flex-col mt-2 ingredient">  
        <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
        <p class="text-[28px] leading-9 mt-3 font-medium text-white pIng">${data[i]['strIngredient']}</p>
        <p class="text-base mt-3 font-normal text-white ">${data[i]['strDescription'].split(" ").slice(0,20).join(" ")}</p>
     </div>
           `;
           
        }
  
        document.getElementById("MealsData").innerHTML = Ingrbox;
       
     }

        displayCatrgory(data) {
        let mealsBox = ``;
        for (let i = 0; i < data.length; i++) {
           mealsBox += `
    <div   class="rounded-xl relative group overflow-hidden CatEgory">
                <img src="${data[i]['strCategoryThumb']}" class="w-[100%] rounded-xl  img1 " alt="" >
                <div class="layer flex flex-col justify-start items-center absolute top-0  bottom-0    start-0 end-0 rounded-xl translate-y-[120%] group-hover:translate-y-[0] z-40 transition-all duration-[1s]">
                 <p class="font-[500] text-center text-[28px] leading-[33.6px] cat ">${data[i]['strCategory']}</p>
                 <p class="font-[400] text-center text-[14px] leading-[20px]  ">${data[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
            </div>
           `;
           
        }
  
        document.getElementById("MealsData").innerHTML = mealsBox;
       
     }


     displaydetaillsmeals(data) {
        let Recipes = '';
    for (let i = 1; i <= 20; i++) {
        if (data[0] && data[0][`strMeasure${i}`] && data[0][`strIngredient${i}`]) {
        Recipes += `<button class="mt-2 me-2 gap-6 font-normal text-base text-[#055160] py-[7px] rounded px-3 bg-[#cff4fc]">${data[0][`strMeasure${i}`]} ${data[0][`strIngredient${i}`]}</button>`+`       `;
    }
  
}

let tags = data[0].strTags?.split(",") || [];

let tagsStr = ''
for (let i = 0; i < tags.length; i++) {
    tagsStr += `<button class="font-normal mt-2 text-base text-[#842029] py-[7px] rounded px-3 bg-[#f8d7da]">${tags[i]}</button>
        `+ ` `
        console.log(tagsStr)
}




        let meals = ``;
        for (let i = 0; i < data.length; i++) {
            meals += `
            <div class="imges">
                <img src="${data[i].strMealThumb}" class="w-full rounded-md" alt="">
                <p class="font-medium text-3xl mt-1 text-white">${data[i]['strMeal']}</p>
            </div>
            <div class="titleimage ">
                <p class="font-medium text-3xl text-white">Instructions</p>
                <p class="font-normal text-base text-white">${data[i]['strInstructions']}</p>
                <p class="font-semibold text-2xl text-white">Area: <span class="font-semibold text-2xl">${data[i]['strArea']}</span></p>
                <p class="font-semibold text-2xl text-white">Category: <span class="font-semibold text-2xl">${data[i]['strCategory']}</span></p>
                <p class="font-semibold text-2xl text-white">Recipes:</p>
                `+ Recipes + 
                `<p class="font-medium text-2xl text-white">Tags:</p>
                `+tagsStr+
                `<br>
                <button class="font-normal mt-2 text-base text-white py-[7px] rounded px-3 bg-[#198754] hover:bg-[#157347]">
                    <a href="${data[i]['strSource']}">Source</a>
                </button>
                <button class="btnr font-normal mt-2 text-base text-white py-[7px] rounded px-3 bg-[#dc3445] hover:bg-[#bb2d3b]">
                    <a href="${data[i]['strYoutube']}">Youtube</a>
                </button>
            </div>
            `;
           
        }
    
        document.getElementById("mealDetails").innerHTML = meals;
       
    } 


    

}

