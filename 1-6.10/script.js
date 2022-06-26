// 1
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 2
askPassword(() => user.login(true), () => user.login(false));