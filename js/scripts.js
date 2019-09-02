$(document).ready(function() {
    // $(".content1").hover(function() {
    //     $(".contant1").toggle("slow");
    //     $(".content2").toggle("5000ms");
    // });


    //Busines Logic
    const pizzaSizeArray = [{
            name: "Extra Large",
            price: 900
        },
        {
            name: "Large",
            price: 700
        },
        {
            name: "Medium",
            price: 500
        },
        {
            name: "Small",
            price: 300
        }
    ]

    const crustOptionArray = [{
            name: "Double-Delight",
            price: 300
        },
        {
            name: "Regular",
            price: 0
        }
    ]
});



//UI-Logic
$("#orderPizza").submit(function(event) {
    event.preventDefault();

    pizzaSize = $("#pizzaSize").val();
    crustOption = $("#crustOption").val();
    toppings = $("#toppings").val();

    numberOfOrder = $("#numberOfOrders").val();
    deliveryPoint = $("#deliveryPoint").val();

    //Business Logic
    let pizzaSizePrice = 0;
    let crustOptionPrice = 0;
    let toppingsPrice = 0;
    //to use these variables later



    //find out which size was selected
    console.log(pizzaSize)
    $.each(pizzaSizeArray, function(key, value) {
        if (value.name == pizzaSize) {
            console.log("name " + value.name + " price " + value.price);
            pizzaSizePrice == value.price;
            return pizzaSizePrice
        }
    });


    //find out which crust was selected
    console.log(crustOption)
    $.each(crustOptionArray, function(key, value) {
        if (value.name == crustOption) {
            console.log("name " + value.name + " price " + value.price);
            crustOptionPrice == value.price;
            return crustOptionPrice
        }
    });



})