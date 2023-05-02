function currencyPage(){
    const options = document.querySelector(".options");

    if(options.value == "btc"){
        window.location.assign("moedas/Bitcoin/bitcoin.html");
    }
    else if(options.value == "dolar"){
        window.location.assign("moedas/Dolar/dolar.html");
    }
    else if(options.value == "euro"){
        window.location.assign("moedas/Euro/euro.html");
    }
    else if(options.value == "libra"){
        window.location.assign("moedas/Libra/libra.html");
    }
    else if(options.value == "peso"){
        window.location.assign("moedas/Peso/peso.html");
    }
    else{
        alert("Selecione uma moeda")
    }

}