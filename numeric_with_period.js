/*
- Will allow all numeric characters (0-9)
- Will allow period/dot character (.)
- Will allow left and right arrow keys
- Will allow backspace key
- Will allow delete key
*/

function numericWithPeriod(event)
{
    var key = window.event ? event.keyCode : event.which;
    
    // allow backspace, delete, left arrow key, right arrow key, period key
    if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 37 || event.keyCode == 39 || key == 46)
    {
      return true;
    }
    // do not allow aplha characters or other special keys such shift, ctrl, alt etc
    else if (key < 48 || key > 57)
    {
      return false;
    }
    // allow numeric keys
    else
    {
      return true;
    }
}
