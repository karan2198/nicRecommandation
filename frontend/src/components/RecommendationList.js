import React from 'react';
import Spinner from './spinner';

const RecommendationList = ({ recommendations, loading }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recommendations</h2>
      {loading ? (
        <div className="flex justify-center items-center my-4">
          <Spinner />
        </div>
      ) : (
        <ul className="space-y-4">
          {recommendations.map((rec, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded">
              <h3 className="text-lg font-semibold">{rec.scheme_name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationList;
