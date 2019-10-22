var budgetController = (function() {
   
    // var x = 23;

    // var add = function(a) {
    //     return x + a;
    // }

    // return {
    //     publicTest: function(b) {
    //         // console.log(add(b));
    //         return add(b);
    //     }
    // }

    // Some code


})();

// UI CONTROLLER
var UIController = (function() {

    // Some code

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // var z = budgetCtrl.publicTest(5);

    // return {
    //     anotherPublic: function() {
    //         console.log(z);
    //     }
    // }

    var ctrlAddItem = function() {

        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works.');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        //console.log(event);

        if (event.keyCode === 13 || event.which === 13) {
            //console.log('ENTER was pressed.');

            ctrlAddItem();
        }

    });

})(budgetController, UIController);