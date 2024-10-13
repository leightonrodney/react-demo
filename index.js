const balance = 20;

const checkBalance = (b) => {
    const balanceMin = 100;
    return console.log(b < balanceMin ? 'Your balance is too low to qualify for no transaction fees.' : 'You qualify for no transaction fees!');
}

checkBalance(balance);