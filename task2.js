function checkName(name){
    if(typeof name !=='string'){
        return 'invalid';
    }

    name = name.toLowerCase();
    const char = name[name.length - 1];
    if(['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(char)){
        return 'Good Name';
    }
    else{
        return 'Bad name';
    }
    
}

console.log(checkName('RAFEE'));