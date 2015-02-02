# while42-logo
Open-source while42 logo using HTML5 canvas.  
The result can be seen [here](http://kytwb.github.io/while42-logo/).

### Example

``` html
<!DOCTYPE html>
<html>
  <body>
    <canvas id="canvas"></canvas>
    <script src="srcs/script.js"></script>
    <script>
        new Logo().render(document.getElementById('canvas').getContext('2d'));
    </script>
  </body>
</html>

```
