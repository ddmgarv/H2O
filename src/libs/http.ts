class Http {
  static instance = new Http();
  get = async (url: string): Promise<object | string> => {
    try {
      const req = await fetch(url, {method: 'GET'});
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Http POST method err', error.message || error);
      throw Error(error);
    }
  };
  post = async (url: string, body: object): Promise<object | string> => {
    try {
      const req = await fetch(url, {method: 'POST', body});
      const json = await req.json();
      return json;
    } catch (error) {
      console.error('Http POST method err', error.message || error);
      throw Error(error);
    }
  };
}

export default Http;
