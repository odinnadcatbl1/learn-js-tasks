// 1
let user = {
    name: "Василий Иванович",
    age: 35
  };
  
let newUser = JSON.parse(JSON.stringify(user));

// 2
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));