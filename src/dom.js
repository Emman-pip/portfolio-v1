export function lol() {
  const body = document.querySelector("body");
  const hello = document.createElement("h1");
  hello.textContent = "HELLOWORLD";
  hello.classList.add("haha");
  body.appendChild(hello);
}
