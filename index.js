const calculateTemp = () =>{

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const valueChosen = document.getElementById('choose_temp');
    valueTemp = choose_temp.options[valueChosen.selectedIndex].value;
    // console.log(valueChosen);

    const cellToFah = (cel) =>{
        let fahrenheit = Math.round((cel*9/5) + 32);
        return fahrenheit;
    }

    const farToCell = (fehr) => {
        let celcius = Math.round((fehr - 32) * 5/9);
        return celcius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = cellToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }else{
        result = farToCell(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celcius`;
    }

}