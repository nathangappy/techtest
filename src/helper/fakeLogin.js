export const fakeLogin = (email, password) => {
  localStorage.setItem('user', email);
  return { status: 200 };
};
