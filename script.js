function Block(blockSize, coordinates) {
  this.width = blockSize;
  this.height = blockSize;
  this.xAxis = coordinates.x;
  this.yAxis = coordinates.y;
};

Block.prototype = {
  render: function renderBlock(context) {
    context.fillRect(this.xAxis, this.yAxis, this.width, this.height);
  }
};

function Logo(blockSize) {
  var _this = this;
  _this.width = 0;
  _this.height = 0;
  _this.blockSize = blockSize || 5;
  _this.blockGapSize = _this.blockSize / 8.4;
  _this.blocks = [
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 0, 2, 1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 2, 0, 1, 1, 0, 2, 0, 1, 1, 1, 1, 0, 2, 0, 1, 1, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 0, 2, 0, 1, 1, 0, 2, 1, 1, 0, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 0, 2, 0, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 0, 2, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 2, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 0, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1],
  ].map(function (line, y) {
    return line.map(function (block, x) {
      if (block != 1)
        return null;
      _this.width += _this.blockSize + _this.blockGapSize;
      _this.height += _this.blockSize + _this.blockGapSize;
      return new Block(_this.blockSize, {
        x: (x + 1) * (_this.blockSize + _this.blockGapSize),
        y: (y + 1) * (_this.blockSize + _this.blockGapSize)
      });
    });
  }).reduce(function (previousBlocksLine, currentBlocksLine) {
    return previousBlocksLine.concat(currentBlocksLine);
  }).filter(function(element) {
    return element instanceof Block;
  });
}

Logo.prototype = {
  render: function renderLogo(context) {
    for (var i = 0; i < this.blocks.length; i++)
      this.blocks[i].render(context);
    return this;
  }
};
