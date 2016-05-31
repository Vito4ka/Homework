var app = {
  pow: function(num, deg) {
    var res = num;

    if (deg !== 0) {
      for (var i = 1; i < Math.abs(deg); i++) {
        res *= num;
      }
    } else {
      res = 1;
    }
    return (deg > 0) ? res : 1 / res;
  }
};

try {
  module.exports = app;
} catch (err) {}
