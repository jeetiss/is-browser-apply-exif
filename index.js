// 2x1 pixel image 90CW rotated with orientation header
var testImageSrc =
  "data:image/jpg;base64," +
  "/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEo" +
  "AAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////" +
  "////////////////////////////////////////////////////////wAALCAABAAIBASIA" +
  "/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";
var result;

var isBrowserApplyEXIF = function () {
  if (typeof result === "undefined") {
    result = new Promise((resolve) => {
      var image = new Image();

      image.src = testImageSrc;

      image.onload = () => {
        resolve(image.naturalWidth < image.naturalHeight);
        image.src = "//:0";
      };
    });
  }

  return result;
};

module.exports = isBrowserApplyEXIF
