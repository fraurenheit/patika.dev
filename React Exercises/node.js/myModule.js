const hello = name => {
    console.log(`hello ${name}`);
};
const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const text = "Text";
const user = {
    name: "Fran",
    surname: "Katzenjammer",
};

export const users = [
    {
    name: "Bernard" ,
    surname: "Black",
    },
    {
    name: "Manny" ,
    surname: "Bianco",
    },
];

export { hello, sum, minus, text, user };

