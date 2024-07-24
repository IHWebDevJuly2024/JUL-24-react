// If we return an array of html elements the app displays them. No problemo
function returnArray() {
  return [
    <li key={1}>First element</li>,
    <li key={2}>Second element</li>,
    <li key={3}>Third element</li>,
  ];
}

const students = ["Aquiles", "Esteban", "Kim"];

function ListsExample() {

  console.log("LIST EXAMPLE RENDERED");
  return (
    <>
      <h3>Students:</h3>
      <ol>
        {students.map((eachDitto, index) => {
          return <li key={index}>{eachDitto}</li>;
        })}
      </ol>
      <h3>Example of lis</h3>
      <ul>{returnArray()}</ul>
    </>
  );
}

export default ListsExample;
