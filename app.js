// BUDGET CONTROLLER
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

    var Expense = function(id, description, value) {
        this.id = id;
        this.description;
        this.value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description;
        this.value;
    };

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        }
        // allExpenses: [],
        // allIncomes:  []
    }
})();

// var Expense = function(id, description, value) {
//     this.id = id;
//     this.description;
//     this.value;
// };

// UI CONTROLLER
var UIController = (function() {

    // Some code

    var DOMstrings = {

        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {

            return {

                 //Will be either inc or exp
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // var z = budgetCtrl.publicTest(5);

    // return {
    //     anotherPublic: function() {
    //         console.log(z);
    //     }
    // }

    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            //console.log(event);

            if (event.keyCode === 13 || event.which === 13) {
            //console.log('ENTER was pressed.');

            ctrlAddItem();
            }
        });
    };

    

    var ctrlAddItem = function() {

        // 1. Get the filed input data

        var input = UICtrl.getInput();
        //console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        //console.log('It works.');
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();