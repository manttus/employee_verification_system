const useHttp = (requestConfig: any, dispatchFunction: Function) => {
  const sendRequest = async () => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      dispatchFunction({ type: "SUCCESS", data: data });
    } catch (error) {
      console.log(error);
      dispatchFunction({ type: "FAILED" });
    }
  };
  return { sendRequest };
};
export default useHttp;
