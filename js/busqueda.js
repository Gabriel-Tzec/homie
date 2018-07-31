(function($, viewport){
    $(document).ready(function() {
      
        // Executes only in XS breakpoint
        if(viewport.is('xs')) {
            $('.box-filtros').collapse('hide');
            $('.btn-close-custom').hide();
        }

        // Execute code each time window size changes
        $(window).resize(
            viewport.changed(function() {
                if(viewport.is('xs')) {
                   $('.box-filtros').collapse('hide');
                   $('.btn-close-custom').hide();
                }

                if(viewport.is('sm')) {
                  $('.box-filtros').collapse('show');
                  $('.box-images').collapse('show');
                }

                if(viewport.is('lg')) {
                  $('.box-filtros').collapse('show');
                  $('.box-images').collapse('show');
                }


                if(viewport.is('>=sm')) {
                   $('.btn-mostrar-filtro').collapse('hide');
                   $('.box-filtros').collapse('show');

                }
            })
        );
    });
})(jQuery, ResponsiveBootstrapToolkit);


$(document).ready(function(){
 
 $('.zonas').select2();
 $('#ciudades').select2({theme:'bootstrap'});
 $("#custom-slider").slider({});

 new GMaps({
   div: '.map',
   lat: 19.4284706,
   lng: -99.1276627
 });
 

 /**
  * Valor inicial
  */
 var valor = $("#custom-slider").val();
 var rango = valor.split(',');
 $('.precio_de').text('$' + rango[0]);
 $('.precio_hasta').text('$' + rango[1]);


 /**
  * Evento slider
  */
 $("#custom-slider").on('change', function() {
      var valor = $(this).val();
      var rango = valor.split(',');
      $('.precio_de').text('$' + rango[0]);
      $('.precio_hasta').text('$' + rango[1]);
 });

  /**
   * Coloca un color morado cuando se selecciona un botón del grupo
   */
   function buttonSelected(el)
   {
       var buttons = $(el).find('button');
       $(buttons).on('click', function(){
           $(buttons).removeClass('active-custom');
           $(this).addClass('active-custom');
       });
   }

   /**
    * Coloca un color morado al botón cuando se selecciona
    * y tambien se remueve la seleccion y eliminando el color
    */
   function buttonToggle(el)
   {
      $(el).on('click', function(){
          $(this).toggleClass('active-custom');;
          if ($(this).hasClass('active-custom')) {
              $(this).find('img.icon-black').hide();
              $(this).find('img.icon-white').show();
          } else {
              $(this).find('img.icon-white').hide();
              $(this).find('img.icon-black').show();
          }
      });
   }

  /***
   *  VISTA MOVIL
   */

  /**
   *  click boton ver departamentos
   */
  $('.btn-show-depa').on('click', function(){
    $('.box-filtros').collapse('hide');
    $('.btn-close-custom').hide();
    $('.box-images').collapse('show');
  });


  $('.btn-close-custom').on('click', function(){
      $('.box-filtros').collapse('hide');
      $('.btn-close-custom').hide();
      $('.box-images').collapse('show');
  });


/**
 * click boton filtros
 */
  $('.btn-show-filtros').on('click', function(){
      $('.box-filtros').collapse('show');
      $('.btn-close-custom').show();
      $('.box-images').collapse('hide');
  });


  /**
   *  Version escritorio
   */


  $('.ocultar-filtros').on('click', function(){
      $('.box-filtros').collapse('hide');
  });

  $('.box-filtros').on('hidden.bs.collapse', function() {
     $('.btn-mostrar-filtro').collapse('show');
    /* $('.btn-close-custom').hide();
     $('.btn-custom-fixed').show();*/

  });

  $('.btn-mostrar-filtro').on('click', function() {
    $('.btn-mostrar-filtro').collapse('hide');
  });

  $('.btn-mostrar-filtro').on('hidden.bs.collapse', function() {
     $('.box-filtros').collapse('show');
  });
  

  $('#ciudades').on('change', function(){
      var valor = $("#ciudades").find('option:selected').val();
      var coordenadas = valor.split(',');
      new GMaps({
         div: '.map',
         lat: coordenadas[0],
         lng: coordenadas[1]
      });
  });


   buttonSelected('.btns-habitacion');
   buttonSelected('.btns-banio');
   buttonSelected('.btns-estacionamiento');
   buttonToggle('.btn-concepto');


   $('.slider-depto').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false
    });
});