const price = 10000;
const payment = 1000;

// 1. kalau uangnya pas
if(price === payment){
    console.log("Makasih sudah bayar pake uang pas");
} else if (payment > price) { // ketika uangnya berlebih
    const change = payment - price;
    console.log(`uang mu ada kembalianya ${change}`);
} else { //ketika uangnya kurang

    const deficit = price - payment;
    
    console.log(`maff Uang Mu kurang ${deficit}`);
}
