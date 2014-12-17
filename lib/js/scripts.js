var t = 0,
    distance1,
    distance2,
    distance3,
    interval;
function calc() {
    var u = (4 * Math.PI) * Math.pow(10, -7),
        i = 1000,
        result1 = (u * i) / (2 * Math.PI * distance1),
        result2 = (u * i) / (2 * Math.PI * distance2),
        result3 = (u * i) / (2 * Math.PI * distance3);
    
    $('#data #data-result').html('Magnitud de campo magnético: <br><b>' + (result1 + result2 + result3) + '</b>');
}
function setPoint(event) {
    var cX = event.pageX,
        cY = event.pageY,
        $point = $('#point'),
        $wire1 = $('.wire:nth-child(1)'),
        $wire2 = $('.wire:nth-child(2)'),
        $wire3 = $('.wire:nth-child(3)');
        
    distance1 = Math.abs($wire1.offset().top - cY)/20,
        distance2 = Math.abs($wire2.offset().top - cY)/20,
        distance3 = Math.abs($wire3.offset().top - cY)/20;
    
    if ($point.length > 0) {
        $point.css('top', (cY - 10) + 'px').css('left', (cX - 10) + 'px');
    } else {
        $point = $('<div id="point"></div>').append(
            $('<div id="data"></div>').append(
                $('<div id="data-wire1"></div>')
            ).append(
                $('<div id="data-wire2"></div>')
            ).append(
                $('<div id="data-wire3"></div>')
            ).append(
                $('<div id="data-result"></div>')
            )
        );
        $point.appendTo('body').css('top', cY + 'px').css('left', cX + 'px');
    }
    
    $('#data #data-wire1').text('Distancia cable 1: ' + distance1 + 'm');
    $('#data #data-wire2').text('Distancia cable 2: ' + distance2 + 'm');
    $('#data #data-wire3').text('Distancia cable 3: ' + distance3 + 'm');
    //interval = setInterval(function() {
        calc();
    //}, 1 * 1000);
}

$('html').on('click', setPoint);
setInterval(function() {
    t++;
}, 1 * 1000);