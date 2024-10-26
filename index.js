// Fetching JSON with Promises
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Fetching JSON with Async/Await
async function fetchData() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
