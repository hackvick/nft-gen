// const API_BASE_URL = "https://nft-gener.herokuapp.com";
const API_BASE_URL = "http://localhost:8000";

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
const LOGIN_API = getApiUrl("/api/user/login");
const SIGN_UP_API = getApiUrl("/api/user/register");

const CREATE_COLLECTION = getApiUrl("/api/user/createCollection");
const GET_COLLECTIONS = getApiUrl("/api/user/getCollections");
const ADD_LAYER = getApiUrl("/api/user/addLayer");
const GET_LAYERS_WITH_COLLECTION_ID = getApiUrl("/api/user/getLayers/");
const UPLOAD_IMAGES_WITH_LAYER_ID = getApiUrl("/api/user/uploadImages/");
const GET_IMAGES_WITH_LAYER_ID = getApiUrl("/api/user/getImages/");
const GENERATE_NFT = getApiUrl("/api/user/generateNFT");

export {
  SIGN_UP_API,
  LOGIN_API,
  CREATE_COLLECTION,
  GET_COLLECTIONS,
  ADD_LAYER,
  GET_LAYERS_WITH_COLLECTION_ID,
  UPLOAD_IMAGES_WITH_LAYER_ID,
  GET_IMAGES_WITH_LAYER_ID,
  GENERATE_NFT
};
