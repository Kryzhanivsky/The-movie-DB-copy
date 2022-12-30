const Loading = () => {
  const element = document.createElement("div");
  element.className = "loader";
  element.innerHTML = `
    <div class="loader__spinner"></div>
    <p class="loader__text">Loading, please wait...</p>
  `;
  return element;
};

export default Loading;
