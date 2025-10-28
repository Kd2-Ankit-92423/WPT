import axios from "axios";
import { BASE_URL } from "./config";
import { toast } from "react-toastify";

export function getAuthHeader() {
  const token = localStorage.setItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    console.warn("⚠️ No token found in localStorage");
    return {};
  }
}
// helper to extract backend data safely
function extractData(resp) {
  return resp?.data?.data || resp?.data || null;
}

//1. fetch food by id
export async function fetchFoodById(foodId) {
  const url = `${BASE_URL}/foods/${foodId}`;
  const response = await axios.get(url,{
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    return extractData(resp);
  }
  throw new Error(resp?.error);
}

//2. fetch all foods
// export async function fetchAllFoods() {
//   const url = `${BASE_URL}/foods`;
//   const response = await axios.get(url);
//   const resp = response.data;
//   if (resp?.status === "success") {
//     return extractData(resp);
//   }
//   throw new Error(resp?.error);
// }
export async function fetchAllFoods() {
    const url = BASE_URL + "/foods";
    const response = await axios.get(url, {
        headers: getAuthHeader()
    });
    const resp = response.data;

    if (resp?.status === 'success') {
        // map fid → id for frontend consistency
        return resp.data.map(item => ({
            id: item.fid,
            name: item.name,
            price: item.price,
            description: item.description,
            type: item.type,
            image: item.image
        }));
    }

    throw new Error(resp?.error);
}

//3. add new food
export async function addNewFood(name, price, description, imageFile, type) {
  const url = `${BASE_URL}/foods`;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("image", imageFile);
  formData.append("type", type);

  const response = await axios.post(url, formData,{
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    toast.success("Food added successfully");
    return extractData(resp);
  }
  throw new Error(resp?.error);
}

//4. update food by id
export async function updateFood(foodId, { name, price, description, image, type }) {
  const url = `${BASE_URL}/foods/${foodId}`;
  const response = await axios.put(url, { name, price, description, image, type },{
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    toast.success("Food updated successfully");
    return extractData(resp);
  }
  throw new Error(resp?.error);
}

//5. delete food by id
export async function deleteFood(foodId) {
  const url = `${BASE_URL}/foods/${foodId}`;
  const foodData = await fetchFoodById(foodId);
  const foodName = foodData?.name || "Food";
  const response = await axios.delete(url, {
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    return toast.success(`${foodName} deleted successfully`);
  }
  const error = toast.error(`Failed to delete ${foodName}: ${resp?.error}`);
  throw new Error(error);
}

//6. update food price
export async function updateFoodPrice(foodId, newPrice) {
  const url = `${BASE_URL}/foods/${foodId}/price`;
  const response = await axios.patch(url, { price: newPrice }, {
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    return toast.success("Price updated successfully");
  }
  throw new Error(toast.error(`Failed to update price: ${resp?.error}`));
}

//7. delete food image
export async function deleteFoodImage(imageName) {
  const url = `${BASE_URL}/foods/images/${imageName}`;
  const response = await axios.delete(url,{
        headers: getAuthHeader()
    });
  const resp = response.data;
  if (resp?.status === "success") {
    return toast.success("Image deleted successfully");
  }
  throw new Error(toast.error(`Failed to delete image: ${resp?.error}`));
}
