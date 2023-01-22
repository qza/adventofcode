import { md5 } from 'hash-wasm';

const key = 'ckczppom'

async function run() {
    for(let i=0; i<Number.MAX_SAFE_INTEGER;i++) {
        let hash = await md5(key + i)
        if(hash.startsWith('000000')) {
            console.log('target number: ', i, 'hash: ', hash);
            break;
        }
    }
}

run();