let list = [1,2,'a','b', 'c', 'd', 'e'];


function filter_list(l) {
    for (let i = 0; i < l.length; i++) {
        if(typeof l[i] === 'string') {
            l.splice(l.indexOf(l[i]), 1);
            i--;
        }
    }
    console.log(l)
}

filter_list(list)