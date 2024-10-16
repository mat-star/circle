function altCirc(){
    const circ = document.getElementById('circulo')
    const corRam = '#' + Math.floor(Mat.ramdom()*16777215).toString(16);
    const nvTam = Math.floor(math.ramdom()*(200-50+1)) + 50;
    circulo.style.backgroundColor = corRam;
    circulo.style.width = nvTam + 'px';
    circulo.style.height = nvTam + 'px';
}