console.log('js loaded');

class Pizza{
    constructor(topping = ['cheese']) {
        this.topping = topping;
    }//end constructor
    cost() {
        if (this.topping.length == 1){   
            return 10
        } else {
        let toppingPrice = 0.99 * this.topping.length-1;
        return 10 + (toppingPrice)
        }//end methods
    }
}

class Order {
    constructor(pizza){
        this.order = [pizza];
    }
    addPizza(pizza) {
        this.order.push(pizza);
    }
    totalPizzaCost() {
        let totalCost = 0;
        for (let pizza of this.order){
            totalCost += pizza.cost();
        }
        return totalCost
    }
}

let pepperoniPizza = new Pizza(['cheese', 'pepperoni'])
let pmpPizza = new Pizza(['cheese', 'pepperoni', 'mushrooms', 'peppers']);
let veggiePizza = new Pizza(['cheese', 'onion', 'peppers', 'mushrooms', 'olives'])
let cheesePizza = new Pizza()

order1 = new Order(pepperoniPizza)

order1.addPizza(veggiePizza);
console.log(order1);
console.log(order1.totalPizzaCost());




