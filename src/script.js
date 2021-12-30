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

let input = (prompt("What would you like to do?"));
while (input !== 'quit') {
    let categories = Object.getOwnPropertyNames(shoppingList);
    if (input === 'list') {
        console.log(shoppingList);
        viewShoppingList();
    }
    else if (input === 'new') {
        const newCategory = prompt('Please write a new shopping list category here!')
        shoppingList[newCategory] = [];
        console.log(`\n${newCategory.toUpperCase()} category was added to the shopping list.`);
        const yesNo = prompt(`Would you like add an item into ${newCategory.toUpperCase()} category?\n\nYES / NO?`);
        if (yesNo === 'yes') {
            const newItemIntoNewCategory = prompt(`Which item would you like to add into the ${newCategory.toUpperCase()} category?`);
            shoppingList[newCategory].push(newItemIntoNewCategory);
            console.log(`\n${newItemIntoNewCategory.toUpperCase()} was added into ${newCategory.toUpperCase()} category.`)
        };
    }
    else if (input === 'buy') {
        const itemToBuy = prompt('Which item would you like to add into the shopping list?');
        const categoryChoice = prompt(`Please choose a ${'category'.toUpperCase()} that you would like to add ${itemToBuy.toUpperCase()} into.\n\n${categories}`)
        if (shoppingList.hasOwnProperty(categoryChoice)) {
            shoppingList[categoryChoice].push(itemToBuy);
            console.log(`Thank you, ${itemToBuy.toUpperCase()} was added to ${categoryChoice}!`);
        }
    }
    else if (input === 'delete') {
        console.log('Please choose an item / category to delete from the current shopping list below.');
        viewShoppingList();
        const deleteChoice = prompt(`What would you like to delete?\n\n${'Please note that deleting a category will delete all items inside this category as well'.toUpperCase()}!`);
        deleteChoice.toLowerCase();
        if (shoppingList.hasOwnProperty(deleteChoice)) {
            delete shoppingList[deleteChoice];
            console.log(`\n\nThank you, ${deleteChoice.toUpperCase()} was removed from the shopping list!`)
        } else {
            for (let i = 0; i < Object.keys(shoppingList).length; i++) {
                if (Object.keys(shoppingList)[i] === deleteChoice) {
                    console.log(`Right choice, ${deleteChoice} will be deleted from the shopping list.`);
                } else {console.log('Wrong choice');}
            }
        } 

        
        // else if (categories.includes(deleteChoice)) {
        //     for (let i = 0; i < categories.length; i++) {
        //         console.log(shoppingList[categories[i]]);
        //         if (categories[i].includes(deleteChoice)) {
        //             console.log(`${categories[i]} includes ${deleteChoice}.`)
        //         }
        //     }
        // }
    }

    input = (prompt("What would you like to do?"));
} 
console.log('\nYou quit the app!');

