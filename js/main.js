var app = new Vue ({
    el:".content",
    data: {
        products: [{id:1, title:"Scarlet nantes", short_text:'One of the most popular varieties of carrot', image:'../images/js_images/Scarlet-Nantes-Carrots.png', desc:"The Scarlet Nantes carrot is a classic heirloom variety renowned for its exceptional flavor and texture. These carrots boast a distinctive appearance, characterized by their long cylindrical shape with blunt ends. Their roots are typically orange in color, showcasing a vibrant hue that hints at their rich taste. What sets Scarlet Nantes apart is its remarkable taste profile. Low in terpenes and high in sugar content, these carrots offer a delightful sweetness that is further enhanced by their crisp and moist texture. Unlike some other carrot varieties, Scarlet Nantes does not develop a woody core, ensuring a consistently tender and enjoyable eating experience. Measuring about 6 inches in length on average, the roots of Scarlet Nantes carrots are mostly cylindrical, culminating in a pleasingly blunted tip. This uniform shape not only adds to their visual appeal but also makes them ideal for various culinary uses. Scarlet Nantes carrots are prized for their versatility. Whether enjoyed fresh as a crunchy snack or incorporated into a variety of dishes, these carrots excel in both taste and texture. They are particularly favored for raw consumption, making them a popular choice for salads, crudites, and other uncooked preparations. Moreover, Scarlet Nantes is celebrated for its dual-purpose nature. It is well-suited for early spring harvesting, offering gardeners the opportunity to enjoy its bounty at the onset of the growing season. Additionally, these carrots are valued for their ability to be stored through the winter months, ensuring a fresh supply of homegrown produce even when other options are scarce. Widely regarded as a 'market standard' variety, Scarlet Nantes enjoys popularity among farmers and traditional gardeners alike, both in Europe and the United States. Its reputation is built upon its consistently sweet flavor, reliable growth patterns, and satisfyingly crunchy texture. Whether grown for personal consumption or commercial purposes, Scarlet Nantes remains a beloved choice for those who appreciate the simple pleasure of a well-grown carrot."},
        {id:2, title:"Imperator", short_text:'Winner of the All-America Selections award', image:'../images/js_images/Imperator-carrot.png', desc:"Imperator carrots, distinguished by their elongated shape and tapered ends, are esteemed for their superior flavor and texture. These carrots stand out with their long, slender profile, which sets them apart from more traditional rounded varieties. Their roots, typically reaching lengths of up to 9 inches, exhibit a graceful tapering that culminates in a fine point. What truly elevates Imperator carrots is their exceptional taste profile. Renowned for their sweetness and tenderness, these carrots boast a flavor that is both rich and satisfying. They are notably low in terpenes and high in sugar content, ensuring a deliciously sweet and palatable eating experience. In addition to their remarkable flavor, Imperator carrots are prized for their impeccable texture. With a crisp yet succulent consistency, they offer a delightful crunch with every bite. Unlike some other carrot varieties, Imperator carrots maintain their tender texture throughout, without developing a woody core. The roots of Imperator carrots are typically a vibrant orange hue, reflecting their robust flavor and nutritional content. Their elongated shape and tapered ends make them not only visually appealing but also well-suited for a variety of culinary applications. Imperator carrots are highly versatile, lending themselves to a range of culinary uses. Whether enjoyed raw as a crunchy snack or cooked in soups, stews, or stir-fries, these carrots excel in both taste and texture. Their elongated shape also makes them ideal for slicing into uniform rounds or julienne strips for use in salads and other dishes. While Imperator carrots are favored for their superb flavor and texture, they are also valued for their storability. With proper harvesting and storage techniques, these carrots can be kept for extended periods, allowing for a steady supply of fresh produce throughout the year. Widely recognized for their exceptional quality, Imperator carrots are a popular choice among gardeners and farmers alike. Their reputation as a premium carrot variety is built upon their consistently sweet flavor, satisfying crunch, and versatility in the kitchen. Whether grown for personal enjoyment or commercial purposes, Imperator carrots remain a beloved option for those seeking the finest in flavor and quality."},
        {id:3, title:"Kuroda", short_text:'The Kuroda Carrot is a Japanese heirloom carrot', image:'../images/js_images/Kuroda-carrot.png', desc:"Kuroda carrots, known for their robust and stocky appearance, offer a unique blend of sweetness and versatility. These carrots are characterized by their stout and sturdy shape, making them a standout choice for gardeners facing challenging soil conditions such as heavy clay or rocky terrain. With their vibrant orange hue and thick 5-inch length, Kuroda carrots are a visual delight, embodying the essence of wholesome goodness. Despite their shorter stature compared to other varieties, these carrots pack a punch in both flavor and texture. What truly distinguishes Kuroda carrots is their exceptional sweetness, making them an ideal ingredient for a wide range of culinary creations. Whether used in soups, stews, sauces, or simply enjoyed raw as a crunchy snack, these carrots lend a delightful sweetness to any dish they grace. In addition to their superior taste, Kuroda carrots are prized for their resilience and adaptability. Their robust roots thrive even in less-than-ideal soil conditions, making them a reliable choice for gardeners facing challenges such as heavy clay or rocky terrain. With their ability to withstand adversity, Kuroda carrots exemplify the resilience and tenacity of nature. Despite their sturdy appearance, Kuroda carrots maintain a tender and succulent texture that is sure to please the palate. Their thick roots offer a satisfying crunch, adding depth and dimension to a variety of culinary creations. While Kuroda carrots may take approximately 85 days to reach maturity in the soil, their exceptional flavor and versatility make them well worth the wait. Whether harvested fresh from the garden or sourced from local markets, these carrots promise a culinary experience that is nothing short of exceptional. In summary, Kuroda carrots are a testament to the beauty of simplicity and resilience. With their robust flavor, versatile nature, and ability to thrive in challenging conditions, these carrots embody the essence of wholesome goodness and culinary excellence. Whether enjoyed in soups, stews, sauces, or simply savored raw, Kuroda carrots are sure to leave a lasting impression on the palate."},
        {id:4, title:"Danvers", short_text:'The classic American heirloom garden carrot', image:'../images/js_images/danvers-carrot.jpg', desc:"Danvers carrots, named after the region in Essex County, Massachusetts, where they originated, are renowned for their cheerful appearance, rich flavor, and satisfying crunch. These carrots typically reach lengths of about 6 to 8 inches, presenting a visually appealing sight in gardens and on dinner plates alike. One of the hallmark characteristics of Danvers carrots is their remarkable sweetness. Thanks to their rich flavor profile, they add a delightful sweetness to various culinary dishes, enhancing the overall taste experience. Whether enjoyed raw or cooked, Danvers carrots bring a burst of natural sweetness that is sure to please the palate. In addition to their exceptional flavor, Danvers carrots boast a slender core and a crunchy texture, adding depth and dimension to every bite. This distinctive crunch is not only satisfying to the senses but also contributes to the overall enjoyment of these carrots in a variety of culinary applications. Danvers carrots are prized for their versatility in the kitchen. Whether sliced into salads, roasted with herbs and spices, or used as a flavorful addition to soups and stews, these carrots lend themselves well to a wide range of dishes. Their vibrant orange hue and uniform shape make them a visually appealing ingredient that adds both flavor and aesthetic appeal to any meal. Despite their slender core, Danvers carrots are known for their resilience and adaptability. They thrive in a variety of growing conditions, making them a popular choice for home gardeners and commercial farmers alike. Whether planted in backyard gardens or cultivated on a larger scale, Danvers carrots consistently deliver on taste, texture, and overall quality. In summary, Danvers carrots are a testament to the rich agricultural heritage of Essex County, Massachusetts, where they first gained prominence. With their cheerful appearance, rich sweet flavor, slender core, and satisfying crunch, these carrots embody the essence of wholesome goodness and culinary excellence. Whether enjoyed fresh from the garden or incorporated into a favorite recipe, Danvers carrots are sure to leave a lasting impression on the taste buds."},
        {id:5, title:"Chantenay", short_text:'Popular French heirloom type of carrot', image:'../images/js_images/Chantenay-Carrot.png', desc:"Chantenay carrots, characterized by their unique shape and fine-grained texture, offer a delightful culinary experience that is both versatile and satisfying. These carrots typically exhibit a distinctive conical shape, tapering gradually from a broad top to a slender tip, reminiscent of a miniature garden gnome's hat. One of the defining features of Chantenay carrots is their fine-grained texture, which adds a delightful mouthfeel to a variety of dishes. However, it's important to note that if left to mature too long in the ground, these carrots can become overly fibrous, detracting from their overall appeal. Therefore, careful attention to harvesting timing is essential to ensure optimal flavor and texture. Chantenay carrots are prized for their versatility in the kitchen. While they can certainly be enjoyed raw as small carrots, they are more commonly used in cooked applications, where their natural sweetness and robust flavor shine. Whether roasted in the oven to caramelized perfection, added to hearty soups and stews for depth of flavor, or preserved through freezing or canning for future use, Chantenay carrots lend themselves beautifully to a wide range of culinary creations. Despite their smaller size compared to some other carrot varieties, Chantenay carrots pack a punch in both taste and nutritional value. Their vibrant orange hue hints at their rich flavor and nutritional content, making them a welcome addition to any meal. In summary, Chantenay carrots offer a delightful combination of fine-grained texture, robust flavor, and versatility in the kitchen. Whether enjoyed raw or cooked, these carrots add depth and dimension to a variety of culinary creations. With their unique shape and sweet flavor, Chantenay carrots are sure to delight the taste buds and elevate any dish they grace."}],
        product:{},
        btnVisible: 0,
        cart: [],
        contactFields: [],
        formVisible: 1,
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods: {
        getProduct:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0) {
                    for(let i in this.products) {
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(', ');
            }
        
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart',cart.join(', '));
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(', ').indexOf(String(this.product.id))!=-1) {
                this.btnVisible=1;
            }
        },
        getCart: function() {
            var cartIds = [];
            var storedCart = window.localStorage.getItem('cart');
            if (storedCart) {
                cartIds = storedCart.split(', ').map(id => parseInt(id));
                this.cart = this.products.filter(product => cartIds.includes(product.id));
            }
        },
        removeFromCart: function(id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(', ');
            }
            
            var index = cart.indexOf(String(id));
            
            if (index !== -1) {
                cart.splice(index, 1);
                window.localStorage.setItem('cart', cart.join(', '));
                this.cart = this.cart.filter(product => product.id !== id);
            }
        },
        makeOrder: function() {
            var orderedProducts = this.cart.map(product => product.title);
            this.cart = [];
            window.localStorage.removeItem('cart');
        
            this.formVisible = 0;
            this.orderedProducts = orderedProducts;
        }
    }
})