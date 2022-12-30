const ErrorMessage = (errorString, fnc = null) => {
  const element = document.createElement("div");
  element.className = "error";
  element.innerHTML = `
    <svg class="error__img" id="e35c4563-06f7-43a3-b0b1-983f0d8b7679" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><path d="M19,.56A18.44,18.44,0,1,0,37.44,19,18.461,18.461,0,0,0,19,.56Z"/><circle cx="19" cy="26.242" fill="#fff" r="1.878"/><path d="M18.969,21.569h0a1.2,1.2,0,0,1-1.2-1.145l-.425-8.883A1.652,1.652,0,0,1,19,9.82h0a1.652,1.652,0,0,1,1.65,1.731l-.487,8.881A1.2,1.2,0,0,1,18.969,21.569Z" fill="#fff"/></svg>
    <p class="error__text">${errorString}</p>
  `;
  if (fnc) {
    const btn = document.createElement("button");
    btn.className = "error__refresh-btn";
    btn.innerText = "Refresh";
    element.append(btn);
  }

  const button = element.querySelector("button.error__refresh-btn");
  button.addEventListener("click", () => {
    element.remove();
    fnc();
  });

  return element;
};

export default ErrorMessage;
