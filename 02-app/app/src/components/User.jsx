function User({ name, age, img }) {//destructuring props
    const isEligible = age >= 25;

    return (
        <div style={{
                border: isEligible ? "2px solid gray": "1px solid green",
                padding: "10px",
                margin: "10px",
                width: "200px",
                textAlign: "center"
                }}
        >
            <img
                src={img}
                alt={name}
                width="100%"
                height="150"
            />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p style={{color: isEligible ? "grey" : "green",}}>
                {isEligible ? "Eligible" : "not Eligible"}
            </p>
        </div>
     );
}

export default User;

/*
ternary operator
logical AND &&
if statement
switch
*/ 