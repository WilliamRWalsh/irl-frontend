const getVariantColor = color => {
  // will change when we add custom buttons
  switch (color) {
    case "BLUE":
      return "primary";
    case "GRAY":
      return "secondary";
    case "GREEN":
      return "success";
    case "YELLOW":
      return "warning";
    case "RED":
      return "danger";
    case "light":
      return "light";
    case "link":
      return "link";
    default:
      return "link";
  }
};

const getColorList = () => {
  return [
    "#7fe5f0",
    "#DB3E00",
    "#FCCB00",
    "#ff80ed",
    "#00ff00",
    "#1273DE",
    "#ff00ff",
  ];
};

module.exports = {
  getColorList,
  getVariantColor,
};
