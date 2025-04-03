// blog_main.html

//-draggable popup
$(function(){
    $('.popup-container').draggable({
      handle: ".popup-header", // Make only the header draggable
      containment: "window" // Constrain dragging within the viewport
  });
});

    /// 2025

    //// hong kong
        ///// layer pop-up open
        document.getElementById('btnHongKong').addEventListener('click', function() {
            document.getElementById('hongKongContainer').style.display = 'block';
        });

        ///// layer pop-up close
        document.getElementById('closeHongkong').addEventListener('click', function() {
            document.getElementById('hongKongContainer').style.display = 'none';
        });

    //// january
        ///// layer pop-up open
        document.getElementById('btnJanuary').addEventListener('click', function() {
            document.getElementById('januaryContainer').style.display = 'block';
        });

        ///// layer pop-up close
        document.getElementById('closeJanuary').addEventListener('click', function() {
            document.getElementById('januaryContainer').style.display = 'none';
        });
