import React, { useState } from 'react';
import RecommendationForm from './RecommendationForm';
import RecommendationList from './RecommendationList';

const RecommendationApp = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const handleRecommendations = (newRecommendations) => {
    setLoading(false); // Hide spinner once recommendations are received
    setRecommendations(newRecommendations);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around p-6 mt-14">
      <div className="w-full md:w-1/2 p-4">
        <RecommendationForm onRecommend={handleRecommendations} setLoading={setLoading} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <RecommendationList recommendations={recommendations} loading={loading} />
      </div>
    </div>
  );
};

export default RecommendationApp;
