(() => {
    let answr = confirm("This will max out your coins and stars. Are you sure?");
 
    const max = Number.MAX_VALUE;

    if (answr) {
        if (typeof log !== "undefined" && log !== null) {
            console.log(
                log.log({
                    event: "adjustCoins",
                    value: max
                })
            );

            console.log(
                log.log({
                    event: "finishLevel",
                    score: max
                })
            );
            alert("Coins and Score Maxxed out. (If it didn't work, try again)");
        } else {
            alert("Error: 'log' object not found in this game context.");
        }
    } else {
        alert("You cancelled.");
    }
})();

