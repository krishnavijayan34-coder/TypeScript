async function fetchNumber(num: number): Promise<number> {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(num);
    }, 1000);

  });

}

async function displayNumbers() {

  const results = await Promise.all([
    fetchNumber(1),
    fetchNumber(2),
    fetchNumber(3)
  ]);

  console.log(results);

}

displayNumbers();