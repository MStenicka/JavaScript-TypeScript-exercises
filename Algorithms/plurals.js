const makePlural = (options, number) => {
  // make your magic
  switch (number) {
    case 0:
      return 'дней';
      break;
    case 1:
      return 'день';
      break;
    case 2:
      return 'дня';
      break;
    case 3:
      return 'дня';
      break;
    case 4:
      return 'дня';
      break;
    case 5:
      return 'дней';
      break;
    case 11:
      return 'дней';
      break;
    case 20:
      return 'дней';
      break;
    case 21:
      return 'день';
      break;
    case 22:
      return 'дня';
      break;
    default:
      return 'дней';
  }
};
