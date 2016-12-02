/*
- Will allow all numeric characters (0-9)
- Strict validation, no other keys will be allowed
*/

function onlyNumeric(event)
{
    var key = window.event ? event.keyCode : event.which;
    
    // do not allow aplha characters or other special keys such shift, ctrl, alt etc
    if (key < 48 || key > 57)
    {
      return false;
    }
    // allow numeric keys
    else
    {
      return true;
    }
}
