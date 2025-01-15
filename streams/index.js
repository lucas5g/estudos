import { randomUUID } from 'crypto';
import { createReadStream, createWriteStream } from 'fs';
import { Readable, Transform, Writable  } from 'stream';

async function main() {
    // await generateFile()
    countFileWords()
}

main()

function countFileWords(){
    const bigFile = createReadStream('big-file.txt')

    const countWords = new Transform({
        transform(chunk, encoding, callback) {
            const words = chunk.toString().split(' ')
            this.wordCount = this.wordCount ?? 0 + words.length
            callback()
        },
        flush(callback) {
            this.push(this.wordCount.toString())
            callback()
        }
    })

    bigFile.pipe(countWords).pipe(process.stdout)
}
function generateFile(){
    return new Promise((resolve, reject) => {
        const seed = 'Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo.'
        const targetSize = 500_000
        
        const repetitions = Math.ceil(targetSize / seed.length)
        
        console.time('generating file')
        const generate = new Readable({
            read(){
        
                for(let i = 0; i < repetitions; i++) {
                    this.push(seed);
                }
                this.push(null);
            }
        
        });
        
        const outPath = 'big-file.txt'
        const output = createWriteStream(outPath)
        
        generate.pipe(output)
        generate.on('end', () => {
            console.timeEnd('generating file')
        })  
    })
}


// console.log(seed)

// const input = new Readable({
//     read() {
//         for(let i = 0; i < 10_000; i++) {
//             this.push(randomUUID());
//         }
//         this.push(null);
//     }
// });

// const toUpperCase = new Transform({
//     transform(chunk, encoding, callback) {
//         callback(null, chunk.toString().toUpperCase());
//     }
// });

// const addHello = new Transform({
//     transform(chunk, encoding, callback) {
//         callback(null, `Hello ${chunk.toString()}`);
//     }
// });

// const output = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     }
// });

// // input.pipe(output);
// input.pipe(toUpperCase).pipe(addHello).pipe(output);