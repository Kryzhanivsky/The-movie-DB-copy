import ErrorMessage from "../components/errorMessage/errorMessage.js";
import Loading from "../components/loading/loading.js";

const AsyncProvider = async (element, fnc) => {
  const environment = document.getElementById(element);
  if (environment) {
    const loader = Loading();
    try {
      environment.append(loader);

      const items = await fnc();

      return items;
    } catch (e) {
      environment.append(ErrorMessage(e, () => AsyncProvider(element, fnc)));
    } finally {
      loader.remove();
    }
  }
};

export default AsyncProvider;
