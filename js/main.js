var app = new Vue ({
    el:"#main_content",
    data: {
        products: [{id:1, title:"Scarlet nantes", short_text:'One of the most popular varieties of carrot', image:'../images/js_images/Scarlet-Nantes-Carrots.png', desc:"These long cylindrical varieties with blunt ends are some of the best flavored and textured carrots. They are low in terpenes, high in sugar and don't develop a woody core. They are the best carrots for eating raw, but generally don't keep very well."},
        {id:2, title:"Imperator", short_text:'Winner of the All-America Selections award', image:'../images/js_images/Imperator-carrot.png', desc:"Imperator Carrots grow best in loose, rich soil free from stones and other obstructions. This is not the type to plant in heavy clay soils or rocky areas. Imperator Carrots tend to take about 75 days to mature after seeding in the outdoor garden."},
        {id:3, title:"Kuroda", short_text:'The Kuroda Carrot is a Japanese heirloom carrot', image:'../images/js_images/Kuroda-carrot.png', desc:"These stocky orange carrots are very sweet and are excellent for soups, stews, and sauces. Kuroda Carrots are also a good choice for gardeners growing their carrots in heavy clay soil or rocky soil. These thick 5″-long roots take about 85 days to mature in the soil."},
        {id:4, title:"Danvers", short_text:'The classic American heirloom garden carrot', image:'../images/js_images/danvers-carrot.jpg', desc:"Named after the area in Essex County, Massachusetts, where they were first grown, these cheerful carrots reach about 6″-8″ long and have a rich sweet flavor. Danvers carrots have a very slender core and a crunchy, satisfying texture."},
        {id:5, title:"Chantenay", short_text:'Popular French heirloom type of carrot', image:'../images/js_images/Chantenay-Carrot.png', desc:"These carrots have a fine-grained texture, but they can turn overly fibrous if harvested late. Chantenay Carrots are sometimes eaten raw as small carrots but are more commonly used in cooked applications such as roasted in the oven, in soups, or preserved by freezing or canning."}]
    },
    mounted:function(){

    }
})