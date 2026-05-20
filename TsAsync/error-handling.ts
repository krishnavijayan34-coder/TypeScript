async function fetchData(): Promise<string> {

  throw new Error("Server error");

}

async function displayData() {

  try {

    const data = await fetchData();

    console.log(data);

  } catch (error) {

    console.log("Error occurred");

  }

}

displayData();
export {};