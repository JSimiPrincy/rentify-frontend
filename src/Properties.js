import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Properties.css'; // Import custom CSS file

const Properties = ({ user }) => {
  const [properties, setProperties] = useState([
    {
      "_id": "1",
      "title": "Sample Property 1",
      "description": "This is a sample property description.",
      "price": 250000,
      "location": "New York, NY",
      "bedrooms": 3,
      "bathrooms": 2,
      "hospitalsNearby": "Hospital A, Hospital B",
      "collegesNearby": "University A, College B",
      "likes": 10
    },
    {
      "_id": "2",
      "title": "Sample Property 2",
      "description": "Another sample property description.",
      "price": 350000,
      "location": "Los Angeles, CA",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital C, Hospital D",
      "collegesNearby": "University B, College C",
      "likes": 15
    },
    {
      "_id": "3",
      "title": "Sample Property 3",
      "description": "This is a third sample property description.",
      "price": 450000,
      "location": "Chicago, IL",
      "bedrooms": 5,
      "bathrooms": 4,
      "hospitalsNearby": "Hospital E, Hospital F",
      "collegesNearby": "University C, College D",
      "likes": 8
    },
    {
      "_id": "4",
      "title": "Sample Property 4",
      "description": "Another sample property description.",
      "price": 300000,
      "location": "San Francisco, CA",
      "bedrooms": 3,
      "bathrooms": 2,
      "hospitalsNearby": "Hospital G, Hospital H",
      "collegesNearby": "University D, College E",
      "likes": 12
    },
    {
      "_id": "5",
      "title": "Sample Property 5",
      "description": "This is a fifth sample property description.",
      "price": 400000,
      "location": "Boston, MA",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital I, Hospital J",
      "collegesNearby": "University E, College F",
      "likes": 7
    },
    {
      "_id": "6",
      "title": "Sample Property 6",
      "description": "Another sample property description.",
      "price": 550000,
      "location": "Miami, FL",
      "bedrooms": 5,
      "bathrooms": 4,
      "hospitalsNearby": "Hospital K, Hospital L",
      "collegesNearby": "University F, College G",
      "likes": 9
    },
    {
      "_id": "7",
      "title": "Sample Property 7",
      "description": "This is a seventh sample property description.",
      "price": 275000,
      "location": "Seattle, WA",
      "bedrooms": 3,
      "bathrooms": 2,
      "hospitalsNearby": "Hospital M, Hospital N",
      "collegesNearby": "University G, College H",
      "likes": 11
    },
    {
      "_id": "8",
      "title": "Sample Property 8",
      "description": "Another sample property description.",
      "price": 425000,
      "location": "Atlanta, GA",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital O, Hospital P",
      "collegesNearby": "University H, College I",
      "likes": 6
    },
    {
      "_id": "9",
      "title": "Sample Property 9",
      "description": "This is a ninth sample property description.",
      "price": 375000,
      "location": "Denver, CO",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital Q, Hospital R",
      "collegesNearby": "University I, College J",
      "likes": 14
    },
    {
      "_id": "10",
      "title": "Sample Property 10",
      "description": "Another sample property description.",
      "price": 500000,
      "location": "Austin, TX",
      "bedrooms": 5,
      "bathrooms": 4,
      "hospitalsNearby": "Hospital S, Hospital T",
      "collegesNearby": "University J, College K",
      "likes": 10
    },
    {
      "_id": "11",
      "title": "Sample Property 11",
      "description": "This is an eleventh sample property description.",
      "price": 325000,
      "location": "Portland, OR",
      "bedrooms": 3,
      "bathrooms": 2,
      "hospitalsNearby": "Hospital U, Hospital V",
      "collegesNearby": "University K, College L",
      "likes": 8
    },
    {
      "_id": "12",
      "title": "Sample Property 12",
      "description": "Another sample property description.",
      "price": 475000,
      "location": "Washington, D.C.",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital W, Hospital X",
      "collegesNearby": "University L, College M",
      "likes": 13
    },
    {
      "_id": "13",
      "title": "Sample Property 13",
      "description": "This is a thirteenth sample property description.",
      "price": 600000,
      "location": "San Diego, CA",
      "bedrooms": 5,
      "bathrooms": 4,
      "hospitalsNearby": "Hospital Y, Hospital Z",
      "collegesNearby": "University M, College N",
      "likes": 11
    },
    {
      "_id": "14",
      "title": "Sample Property 14",
      "description": "Another sample property description.",
      "price": 450000,
      "location": "Philadelphia, PA",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital AA, Hospital BB",
      "collegesNearby": "University N, College O",
      "likes": 9
    },
    {
      "_id": "15",
      "title": "Sample Property 15",
      "description": "This is a fifteenth sample property description.",
      "price": 375000,
      "location": "Phoenix, AZ",
      "bedrooms": 4,
      "bathrooms": 3,
      "hospitalsNearby": "Hospital CC, Hospital DD",
      "collegesNearby": "University O, College P",
      "likes": 12
    }
  ]);
  

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await axios.get('https://6649263b56a6512a1208f674--rentify-backend.netlify.app/properties/');
      setProperties(response.data);
    };
    if (properties.length === 0) {
      fetchProperties();
    }
  }, []);


  const handleLike = async (id) => {
    const response = await axios.post(`https://6649263b56a6512a1208f674--rentify-backend.netlify.app/properties/${id}/like`);
    setProperties(properties.map(p => p._id === id ? response.data : p));
  };

  const handleInterest = async (id) => {
    await axios.post(`https://6649263b56a6512a1208f674--rentify-backend.netlify.app/properties/${id}/interested`, { buyerId: user._id });
    alert('Seller has been notified.');
  };

  return (
    <div className="properties-container">
      {properties.map(property => (
        <div className="property-card" key={property._id}>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>Price: ${property.price}</p>
          <p>Location: {property.location}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Hospitals Nearby: {property.hospitalsNearby}</p>
          <p>Colleges Nearby: {property.collegesNearby}</p>
          <div className="btn-container">
            <button className="btn" onClick={() => handleLike(property._id)}>Like ({property.likes})</button>
            {user.userType === 'buyer' && <button className="btn" onClick={() => handleInterest(property._id)}>I'm Interested</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;


