const argumentValue = process.argv[2];




function getLaserSetting(value){
    if (value == 'please'){
        result = 'OFF';
        return result;
    }
    else{
        result = 'ON';
        return result;
    }

}

console.log(getLaserSetting(argumentValue));