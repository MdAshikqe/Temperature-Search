const weatherKey= `328229b4ad3a472b673b5026a551a357`;
const getWeather=()=>{
    const search= document.getElementById('getInput').value;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${weatherKey}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => updateWeather(data))
}
const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}

const updateWeather=wehther=>{
    console.log(wehther)
        setInnerText('location', wehther.name);
        setInnerText('set-degree',wehther.main.temp);
        setInnerText('weatherExpresion',wehther.weather[0].main)
        // set icons
        const url=`https://openweathermap.org/img/wn/${wehther.weather[0].icon}@2x.png`;
        const imgeIcons= document.getElementById('img');
        imgeIcons.setAttribute('src',url);


}

