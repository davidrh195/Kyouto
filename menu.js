/*Estos son los procedimientos que se utilizaron para esconder y mostrar el munu de inicio cuando halla un click en el menu comprimido.*/

$(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
        if(contador == 1){
            $('header').animate({
                top:'0'
            })
            $('nav').animate({
               left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('header').animate({
                top:'290'
            })
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};
