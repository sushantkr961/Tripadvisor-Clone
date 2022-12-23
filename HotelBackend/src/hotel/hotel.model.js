const { Schema, model } = require("mongoose");

const HotelSchema = new Schema({
    
    
    city_slug:{
        type:Boolean
    },

    instant_bookable:{
        type:Boolean,
        default:false
    },
  
    ac:{
        type:Boolean,
        // require:true,
        default:false
    },
   
    cook_on_call:{
        type:Boolean,
        // require:true,
        default:false
    },
    
    premium:{
        type:Boolean,
         default:false
    },
   
    pets:{
        type:Boolean,
        // require:true,
        default:false
    },
    state_slug:{
        type:String,
    },
    gym:{
        type:Boolean,
        // require:true,
        default:false
    },
  
    internet:{
        type:Boolean,
        // require:true,
        default:false
    },
    
    television:{
        type:Boolean,
        // require:true,
        default:false
    },
   
    review_rating:{
        type:Number,
        min:0,
        max:5,
    },
    created_on:{
        type:String
    },
    max_price_in_usd:{
        type:Number,
        // require:true
   },
   
    check_in:{
        type:Date,
        default:null
   },
    
   images_small:{
        type:[String]
   },
   
    parking:{
        type:Boolean,
        // require:true,
        default:false
    },
    
    active:{
        type:Boolean,
        // require:true,
        default:false
    },
    spa:{
        type:Boolean,
        // require:true,
        default:false
    },
    number_of_rooms:{
        type:Number,
        // require:true
    },
    refrigerator:{
        type:Boolean,
        // require:true,
        default:false
    },
    city:{
        type:String,
        // require:true
    },
    images_large:{
        type:[String],
        // require:true
    },
    property_type:{
        type:String,

    },
    review_count:{
        type:Number
    },
    housekeeping:{
        type:Boolean,
        // require:true,
        default:false
    },
    
    title:{
        type:String,
        // require:true
    },
    
    country:{
        type:String,

    },
    
    number_of_bathrooms:{
        type:Number

    },
    
    country_slug:{
        type:String
    },
    
    starting_price_in_usd:{
        type:Number
    },
     
    occupancy:{
        type:Number
    },
    
    images_medium:{
       type:[String]
    },
      
    functional_kitchen:{
        type:Boolean,
        // require:true,
        default:false
    },
    swimming_pool:{
        type:Boolean,
        // require:true,
        default:false
    },

    state:{
        type:String
    },
    score:{
        type:Number
    },

    lng:{
        type:Number
    },

    lat:{
        type:Number
    },

    washing_machine:{
        type:Boolean,
        // require:true,
        default:false
    },

   images_mid_large:{
    type:[String]
   },

   units:{
    type:Number
   },

    dish_washer:{
        type:Boolean,
        // require:true,
        default:false
    },

    availability_pct:{
        type:Number
    },
  
    slug:{
        type:String
    },
   
    prop_tags:{
        type:[String]
    },
   
    url:{
        type:String
    },
   
    currency:{
        type:String
    }

});

const HotelModel = model("hotel", HotelSchema);

module.exports = HotelModel;