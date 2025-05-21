console.log("This is my script");

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked!");

  let email = document.getElementById("emailid").value;
  let key = ".env";
  let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`;

  try {
    let res = await fetch(url);
    let result = await res.json();

    let str = "";
    for (let key of Object.keys(result)) {
      if (
        typeof result[key] === "object" &&
        result[key] !== null &&
        result[key].hasOwnProperty("value")
      ) {
        str += `<div><strong>${key}:</strong> ${result[key].value}</div>`;
      } else {
        str += `<div><strong>${key}:</strong> ${result[key]}</div>`;
      }
    }

    console.log(str);
    Resultscont.innerHTML = str;
  } catch (error) {
    console.error("Error fetching email validation:", error);
    Resultscont.innerHTML = `<div style="color: red;">Failed to fetch data. Please try again.</div>`;
  }
});