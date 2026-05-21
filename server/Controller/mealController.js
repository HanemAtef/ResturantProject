// import meal model
const Meal=require("../models/Meal");
//all meals
const getMeals=async(req,res)=>{
    try{
        const meals=await Meal.find();
        res.status(200).json({
            data:meals,
            success:true,
            msg:"Meals fetched successfully"
        })
    }    catch(err){
        console.log(err);
        res.status(500).json({ msg: "Server error"
        })
    }
}

// get single meal
const getMeal=async(req,res)=>{
    try{
        const{ id }=req.params.id;
        const meal=await Meal.findById(id)
        if(!meal){
            return res.status(404).json({ msg: "Meal not found" });
        }
        res.status(200).json({
            data:meal,
            success:true,
            msg:"Meal fetched successfully"
        })
    }
catch(err){
    console.log(err);
    res.status(500).json({ msg: "Server error"
    })      
}}

//seach meals
const searchMeals=async(req,res)=>{
    try{
        const {search,title,category}=req.query;
        const page=parseInt(req.query.page)||1;
        const limit=parseInt(req.query.limit)||10;
        const skip=(page-1)*limit;
        let filter={};
        if(search) filter.$text={$search:search};
        if(title) filter.title={$regex:title,$options:"i"};
        if(category) filter.category={$regex:category,$options:"i"};
        const totalMeals=await Meal.countDocuments(filter)
        if(!totalMeals){
            return res.status(200).json({ msg: "No meals found" });
        }
        let query=Meal.find(filter)
    
   if (search) {
      query = query
        .select({ title: 1,category: 1, score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } });
    } else {
      query = query.sort({ createdAt: -1 });
    }

    const meals = await query.limit(limit).skip(skip);

    res.status(200).json({
      success: true,
      msg: meals.length ? "Meals found" : "No meals found",
      data: meals,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalMeals / limit),
        totalMeals,
        mealsInPage: meals.length,
      }
    });
    
  
    }
    catch(err){
        console.log(err);
        res.status(500).json({ msg: "Server error" });  
}


}

const Meal = require("../models/Meal");
// Create Meal
const createMeal = async (req, res) => {

    const { title, description, price, category } = req.body;


    const meal = await Meal.create(req.body)

    res.status(201).json({
        msg: "Meal created successfully",
        data: meal
    })
};


// updating Meal 

const updateMeal = async (req, res) => {

    const meal = await Meal.findById(req.params.id)

    if (!meal) {
        return res.status(404).json({
            msg: "Meal not found",
        });
    }


    Object.assign(meal, req.body);

    await meal.save();
    res.status(200).json({
        msg: "Meal updated successfully",
        data: meal,
    });
};



// Delete Meal
const deleteMeal = async (req, res) => {

    const meal = await Meal.findById(req.params.id)

    if (!meal) {
        return res.status(404).json({
            msg: "Meal not found",
        });
    }

  await meal.deleteOne();

   res.status(200).json({
        msg: "Meal deleted successfully"
    
    });
}


module.exports={    
    getMeals,
    getMeal,
searchMeals,
    createMeal,
    updateMeal,
    deleteMeal
}
