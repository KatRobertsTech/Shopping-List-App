// new - Add new category
// buy - Add new item to the list
// list - List full shopping list
// delete - remove a category or an item from the shopping list

let shoppingList = {
    "fruit": ["oranges", "apples"],
    "vegetables": ["carrots", "parsnips", "spinach"],
    "diary": ["milk", "butter"],
    "bakery": []
};

function viewShoppingList() {
    let categories = Object.getOwnPropertyNames(shoppingList);
    for (let i = 0; i < Object.keys(shoppingList).length; i++) {
        console.log('*****************');
        console.log(categories[i].toUpperCase());
        let categoriesListed = shoppingList[categories[i]];
        for (let j = 0; j < categoriesListed.length; j++) {
            console.log(`    ${j} - ${categoriesListed[j]}`);
        }
    }
}

function promptMe() {
    return prompt('What would you like to do?\n\n"new" - Add a new category\n"buy" - Add a new item to the list\n"list" - List full shopping list\n"delete" - remove a category or an item from the shopping list');
};



let input = promptMe();
while (input !== 'quit') {
    let categories = Object.getOwnPropertyNames(shoppingList);
    if (input === 'list') {
        console.log(shoppingList);
        viewShoppingList();
    }
    else if (input === 'new') {
        const newCategory = prompt('Please write a new shopping list category here!');
        shoppingList[newCategory] = [];
        console.log(`\n${newCategory.toUpperCase()} category was added to the shopping list.`);
        const yesNo = prompt(`Would you like add an item into ${newCategory.toUpperCase()} category?\n\nYES / NO?`);
        if (yesNo === 'yes') {
            const newItemIntoNewCategory = prompt(`Which item would you like to add into the ${newCategory.toUpperCase()} category?`);
            shoppingList[newCategory].push(newItemIntoNewCategory);
            console.log(`\n${newItemIntoNewCategory.toUpperCase()} was added into ${newCategory.toUpperCase()} category.`);
        };
    }
    else if (input === 'buy') {
        const itemToBuy = prompt('Which item would you like to add into the shopping list?');
        const categoryChoice = prompt(`Please choose a ${'category'.toUpperCase()} that you would like to add ${itemToBuy.toUpperCase()} into.\n\n${categories}\n\nOr write ${'add category'.toUpperCase()} to add a new category first.`)
        if (shoppingList.hasOwnProperty(categoryChoice)) {
            shoppingList[categoryChoice].push(itemToBuy);
            console.log(`Thank you, ${itemToBuy.toUpperCase()} was added to ${categoryChoice}!`);
        } else if (categoryChoice === 'add category'){
            const newCategory = prompt('Please write a new shopping list category here!');
            shoppingList[newCategory] = [];
            shoppingList[newCategory].push(itemToBuy);
            console.log(`Thank you ${itemToBuy} was added to a brand new category ${newCategory}.`);
        }
    }
    else if (input === 'delete') {
        console.log('Please choose an item / category to delete from the current shopping list below.');
        viewShoppingList();
        const deleteChoice = prompt(`What would you like to delete?\n\n${'Please note that deleting a category will delete all items inside this category as well'.toUpperCase()}!`);
        deleteChoice.toLowerCase();
        if (shoppingList.hasOwnProperty(deleteChoice)) {
            delete shoppingList[deleteChoice];
            console.log(`\n\nThank you, ${deleteChoice.toUpperCase()} was removed from the shopping list!`);
        } else {
            for (let i = 0; i < categories.length; i++) {
                for (let j = 0; j < categories[i].length; j++) {
                    if (deleteChoice === shoppingList[categories[i]][j]) {
                        console.log(`${categories[i]} category contains ${deleteChoice}. We will delete ${deleteChoice} from the shopping list.`)
                        shoppingList[categories[i]].splice(j, 1);
                    }
                }
            }
        }
    }

    input = promptMe();
} 
console.log('\nYou quit the app!');

