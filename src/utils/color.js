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

module.exports = getVariantColor;
