function parallaxMouse(event) {

    let layers = this.querySelectorAll('.parallax-js') // запсиываем все слои в переменную

    layers.forEach(layer => { // перебираем каждый слой
        let speed = layer.getAttribute('data-speed'); // получаем атрибут с показателем скорости от каждого слоя
        // layer.style.transform = `translateX( ${event.clientX*speed/1000}px)`
        layer.style.transform = `translate( ${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallaxMouse); //
