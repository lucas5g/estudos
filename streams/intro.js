import { randomUUID } from 'crypto';
import { Readable, Transform, Writable  } from 'stream';


const input = new Readable({
    read() {
        for(let i = 0; i < 10_000; i++) {
            this.push(randomUUID());
        }
        this.push(null);
    }
});

const toUpperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

const addHello = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, `Hello ${chunk.toString()}`);
    }
});

const output = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// input.pipe(output);
input.pipe(toUpperCase).pipe(addHello).pipe(output);