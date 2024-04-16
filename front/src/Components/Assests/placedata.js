import bc from '../Assests/bc.jpeg'
import shuttle from '../Assests/shuttle.jpg'
import basket from '../Assests/basket.png'
import cricket from '../Assests/cricket.png'
import football from '../Assests/football.png'
let data_place=[
    {
        id:1,
        name:"Shri Kempegowda Indoor Stadium",
        location:"Near Lalbagh Main Gate",
        
        time:"5AM-10PM",
        sportname:"Badminton",
        image1:"data:image/jpeg;base64,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",
        image2:"data:image/jpeg;base64,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",
        aminities:{
            "washroom":true,
            "changeroom":true,
            "parking":true,
            "drinkingwater":true 
    },
        about:"Badminton:\n- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.\n- Sports equipment not available on rent.\n- Barefoot play is strictly prohibited.",
        sport:shuttle,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.1548696742009!2d77.58171223859785!3d12.952021210811068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1509781529f3%3A0x89294408ca625157!2sSri%20Nadaprabhu%20Kempegowda%20Indoor%20Stadium!5e0!3m2!1sen!2sus!4v1708852972387!5m2!1sen!2sus"

    },
    {
        id:2,
        name:"Karnataka Lions  Academy",
        location:"Electronic City Phase 1",
        image1:bc,
        image2:bc,
        time:"7:30AM-7:30PM",
        sportname:"Cricket",
        about:"i",
        sport:cricket,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8839243518346!2d77.64595277507438!3d12.850772987453583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bb1645c8c3d%3A0x4d3f28cb9e35e304!2sKLCA%20Karnataka%20Lions%20Cricket%20Academy!5e0!3m2!1sen!2sin!4v1708853195472!5m2!1sen!2sin",
        aminities:{
            "washroom":true,
            "parking":true,
            "drinkingwater":true 
    },
    },
    {
        id:3,
        name:"AUK Sports Zone",
        location:"Banagiri Nagara",
        image1:bc,
        image2:bc,
        time:"7AM-10:30PM",
        sportname:"Basketball",
        about:"i",
        sport:basket,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7583342692897!2d77.55434377507564!3d12.923247987387649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f14e6c8c4b7%3A0x3636d11dcfd8963d!2sAUK%20SPORTS%20ZONE!5e0!3m2!1sen!2sin!4v1708853295325!5m2!1sen!2sin",
        aminities:{
            "washroom":true,
            "parking":true,
            "drinkingwater":true 
    },
    },
    {
        id:4,
        name:"South United Football Club",
        location:"RBANM's Ground",
        image1:bc,
        image2:bc,
        time:"7AM-8:30PM",
        sportname:"Football",
        about:"Football:\n - It is recommended but not compulsory to wear football studs while playing at the facility.\n - Metal studs are not allowed.",
        sport:football,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8538999127586!2d77.6117856750766!3d12.981194887335038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f738eb82b%3A0xce45df8cc8f4dee5!2sSouth%20United%20Football%20Club!5e0!3m2!1sen!2sin!4v1708853377901!5m2!1sen!2sin",
        aminities:{
            "washroom":true,
            "parking":true,
            "drinkingwater":true ,
            "shower":true
    },
    },
    {
        id:5,
        name:"Bangalore Football Stadium",
        location:"Ashok Nagar",
        image1:bc,
        image2:bc,
        time:"7AM-8PM",
        sportname:"Football",
        about:"1.Eatables not allowed inside the premises.\n2. Consumption of Food, Alcohol and Smoking inside the premises is prohibited.\n\nFootball:\n - It is recommended but not compulsory to wear football studs while playing at the facility.\n - Metal studs are not allowed.",
        sport:football,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.050056580186!2d77.60865497507633!3d12.968648787346464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681c5a1fd5d%3A0x6cf06ee6d39fab11!2sBengaluru%20Football%20Stadium!5e0!3m2!1sen!2sin!4v1708853436215!5m2!1sen!2sin",
        aminities:{
            "washroom":true,
            "parking":true,
            
    },
    },
    {
        id:6,
        name:"Wilson Garden Club",
        location:"Off Hosur Main Road",
        image1:bc,
        image2:bc,
        time:"7AM-10PM",
        sportname:"Badminton",
        about:"Badminton:\n- Non Marking Shoes compulsory for Badminton. Shoes must be worn after entering the facility.\n- Sports equipment not available on rent.\n- Barefoot play is strictly prohibited.",
        sport:football,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3644532015373!2d77.59338887507606!3d12.94851518736474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c626efd32f%3A0x38bfa60e1102ef0f!2sWilson%20Garden%20Club!5e0!3m2!1sen!2sin!4v1708853516455!5m2!1sen!2sin",
        aminities:{
            "changeroom":true,
            "parking":true,
            "drinkingwater":true
            
    },
    },
    {
        id:7,
        name:"Achieve & Cherish",
        location:"Hulivamu",
        image1:bc,
        image2:bc,
        time:"6AM-10PM",
        sportname:"Basketball",
        about:"Football:\n - It is recommended but not compulsory to wear football studs while playing at the facility.\n - Metal studs are not allowed.",
        sport:basket,
        locationadd:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4087381041313!2d77.60845837507495!3d12.881418387425754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14d44e964e27%3A0xbfca8e58b526a22!2sAchieve%20and%20Cherish!5e0!3m2!1sen!2sin!4v1708853595307!5m2!1sen!2sin",
        aminities:{
            "changeroom":true,
            "parking":true,
            "drinkingwater":true
            
    },
    },
]
export default data_place