export default async function() {
  fetch("http://0.0.0.0:8080/", {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify({ phoneCommandID: "PC6" }),
    headers: {
      "Content-Type": "application/json"
    }
  });
}
