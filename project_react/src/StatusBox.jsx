{/* <StatutBox status={"error"}/> */}



function StatutBox({ status }) {
  const colorPicker = () => {
    if (status === "warning") {
      return "yellow";
    } else if (status === "error") {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <button
      style={{
        background:colorPicker(),
      }}
    >
      test
    </button>
  );
}
export default StatutBox;




