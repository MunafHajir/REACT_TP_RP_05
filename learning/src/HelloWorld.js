function HelloWorld() {
    var name = "Gopika";
    return (
        // JSX
        <h1 
            style={ {fontSize: "24px", color: "blue" } }>
            Hello { name }
        </h1>
    )    
}
 
export default HelloWorld;