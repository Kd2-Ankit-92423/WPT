import { useEffect, useState } from "react";
import {
  fetchAllFoods,
  addNewFood,
  deleteFood,
  updateFoodPrice
} from "../services/foods";
import { toast, ToastContainer } from "react-toastify";

function FoodManager() {
  const [foods, setFoods] = useState([]);
  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    type: ""
  });

  const [priceUpdate, setPriceUpdate] = useState({ id: "", price: "" });

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const data = await fetchAllFoods();

      // ✅ Handle both possible formats: array or wrapped data
      if (Array.isArray(data)) {
        setFoods(data);
      } else if (data?.foods && Array.isArray(data.foods)) {
        setFoods(data.foods);
      } else {
        console.error("Unexpected API format:", data);
        setFoods([]);
      }
    } catch (error) {
      toast.error("Failed to load foods");
      console.error("Load foods error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewFood({ ...newFood, image: files[0] });
    } else {
      setNewFood({ ...newFood, [name]: value });
    }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    try {
      await addNewFood(
        newFood.name,
        newFood.price,
        newFood.description,
        newFood.image,
        newFood.type
      );
      toast.success("Food added successfully");
      setNewFood({ name: "", price: "", description: "", image: null, type: "" });
      loadFoods();
    } catch (error) {
      toast.error("Failed to add food");
      console.error("Add food error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFood(id);
      toast.success("Food deleted successfully");
      loadFoods();
    } catch (error) {
      toast.error("Delete failed");
      console.error("Delete food error:", error);
    }
  };

  const handlePriceUpdate = async () => {
    try {
      if (!priceUpdate.id || !priceUpdate.price) {
        toast.warn("Please enter both ID and new price");
        return;
      }
      await updateFoodPrice(priceUpdate.id, priceUpdate.price);
      toast.success("Price updated successfully");
      setPriceUpdate({ id: "", price: "" });
      loadFoods();
    } catch (error) {
      toast.error("Price update failed");
      console.error("Price update error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h2 className="mb-4">Food Manager</h2>

      {/* Add New Food Form */}
      <form onSubmit={handleAddFood} className="mb-4">
        <div className="row g-2">
          <div className="col-md-2">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={newFood.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              value={newFood.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={newFood.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              name="type"
              className="form-control"
              placeholder="Type"
              value={newFood.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">
              Add Food
            </button>
          </div>
        </div>
      </form>

      {/* Update Price */}
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Food ID"
            value={priceUpdate.id}
            onChange={(e) =>
              setPriceUpdate({ ...priceUpdate, id: e.target.value })
            }
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="New Price"
            value={priceUpdate.price}
            onChange={(e) =>
              setPriceUpdate({ ...priceUpdate, price: e.target.value })
            }
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning" onClick={handlePriceUpdate}>
            Update Price
          </button>
        </div>
      </div>

      {/* Food List */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.length > 0 ? (
            foods.map((food) => (
              <tr key={food.fid}>
                <td>{food.fid}</td>
                <td>{food.name}</td>
                <td>₹{food.price}</td>
                <td>{food.type}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(food.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No food items available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FoodManager;
