const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const errData = await response.json();
    throw errData;
  } catch (e) {
    console.log(e);
  }
};

const getProductData = async () => {
  const result = await request('/src/api/productData.json');
  return result;
};

export default getProductData;
