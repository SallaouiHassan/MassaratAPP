function test1(string) {
    let array = string.split('');
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result;
    console.log(string);

    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            array[i] = alphabet.indexOf(array[i].toLowerCase()) + 1;
        }

        if (typeof array[i] === 'number') {
            array[i] = 10 - Number(array[i]);
        }
    }

    for (i = array.length; i > 0; i--) {
        result += array[i];
    }

    console.log(array);
}

test1("9alam");