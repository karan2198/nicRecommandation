import React, { useState } from 'react';
import axios from 'axios';

const RecommendationForm = ({ onRecommend, setLoading }) => {
  const [formData, setFormData] = useState({
    search_terms: '',
    age: '',
    social_category: '',
    gender: '',
    domicile_of_tripura: '',
    num_recommendations: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner immediately
    try {
      const response = await axios.post('https://binding-ericka-karan2198-cdd3e94c.koyeb.app/recommend', formData);
      onRecommend(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setLoading(false); // Hide spinner in case of error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Search Terms:</label>
        <input 
          type="text" 
          name="search_terms" 
          value={formData.search_terms} 
          onChange={handleChange} 
          placeholder="Ex.: 12th, Merit Award"
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Age:</label>
        <input 
          type="text" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
          placeholder="Ex.: 21-25"
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Social Category:</label>
        <input 
          type="text" 
          name="social_category" 
          value={formData.social_category} 
          onChange={handleChange} 
          placeholder="Ex.: ST/SC/OBC"
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Gender:</label>
        <input 
          type="text" 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange} 
          placeholder="Ex.: M/F/T"
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Domicile of Tripura:</label>
        <input 
          type="text" 
          name="domicile_of_tripura" 
          value={formData.domicile_of_tripura} 
          onChange={handleChange} 
          placeholder="Ex.: Y/N"
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Number of Recommendations:</label>
        <input 
          type="number" 
          name="num_recommendations" 
          value={formData.num_recommendations} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded" 
          required 
        />
      </div>
      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default RecommendationForm;
