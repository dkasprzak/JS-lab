const data = Array.from({length: 100}, (_, i) => i + 1);

async function measureAndLogPerformance(){
    await measurePerformance('add 1', () => addData1(data), data);
    await measurePerformance('add 2', () => addData2(data), data);
    await measurePerformance('add 3', () => addData3(data), data);
}   

measureAndLogPerformance();

async function addData1(data) {
   return data.reduce(async (sumPromise, item) => {
    const sum = await sumPromise;
    return asyncAdd(sum, item);
   }, 0);
}

async function addData2(data){
    console.log('reduce start')
    const resultPromise = data.reduce(async (sumPromise, item) => {
        const sumValue = await sumPromise
        return asyncAdd(sumValue, item)
    }, 0)
    console.log('reduce end')
    return resultPromise
}

async function addData3(values){
    let data = [...values]

    while(data.length > 1){
        let asyncTempSums = []
        while(data.length > 0){
            if(data.length === 1){
                asyncTempSums.push(Promise.resolve(data.pop()))
            }else{
                const a = data.pop()
                const b = data.pop()
                asyncTempSums.push(asyncAdd(a, b))
            }
        }
        data = await Promise.all(asyncTempSums)
    }
    return data.pop()
}


async function measurePerformance(name, cb){
    console.log(`Start: ${name}`);
    performance.mark('mf-start');
    const result = await cb()
    performance.mark('mf-end')
    const runTime = performance.measure('Czas wykonania kodu', 'mf-start', 'mf-end')
    console.log(`Wynik: z ${name}: ${result}`)
    console.log(`Czas wykonainia: ${runTime.duration.toFixed(2)}ms`)
}

async function asyncAdd(a, b){
    console.count('[async add operation]')
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('err', {a, b})
        return Promise.reject('Argumenty muszą mieć typ number!');
    }
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve(a + b)
     }, 10)   
    })
}

