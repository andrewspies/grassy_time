export const validateErrors = (event: any, setState: any) => {
  let errorString = '';
  let name = event.currentTarget.name as string;
  // eslint-disable-next-line
  let pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/);

  if (event.currentTarget.value.length <= 1) {
    errorString = `All fields are required`;
  }
  if (name === 'email' && !event.currentTarget.value.includes('@')) {
    errorString = `Please provide a valid email format`;
  }
  if (name === 'password' && event.currentTarget.value.length < 8) {
    errorString = `Password is too short, please ensure it is at least 8 characters long`;
  }
  if (name === 'password' && !pattern.test(event.currentTarget.value)) {
    console.log(event.currentTarget.value);
    errorString = `Password must contain at least one uppercase letter and one number`;
  }
  return setState(errorString);
};