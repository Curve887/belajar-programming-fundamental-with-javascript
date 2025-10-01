const price = 10000;
const payment = 12000;

// 1. kalau uangnya pas
if(price === payment){
    console.log("Makasih sudah bayar pake uang pas");
} else if (payment > price) { // ketika uangnya berlebih
    const change = payment - price;
    console.log(`uang mu ada kembalianya ${change}`);
} else { //ketika uangnya kurang
    console.log("uang mu kurang");
}
