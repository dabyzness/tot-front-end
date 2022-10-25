const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/search`;

const search = async (searchTerm, typeQuery) => {
  try {
    const res = await fetch(`${BASE_URL}/${searchTerm}?type=${typeQuery}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { search };
