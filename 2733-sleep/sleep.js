//millis 밀리초동안 잔 후 아무 값이나 리턴하는 비동기 함수를 작성하는 문제
//setTimeout을 사용해서 millis 후 resolve하는 프로미스를 리턴하면 간단하게 해결

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(res => setTimeout(res, millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */