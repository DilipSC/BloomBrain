import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Firebase configuration (replace with your Firebase config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FeedbackAndReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    feedback: "",
  });

  // Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsList);
    };
    fetchReviews();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.feedback) {
      const reviewsCollection = collection(db, "reviews");
      await addDoc(reviewsCollection, {
        ...newReview,
        timestamp: serverTimestamp(),
      });
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: "", feedback: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Feedback and Reviews</h2>
      <div>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{review.name}</h3>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
            <p>{review.feedback}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <h3>Leave Your Feedback</h3>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Rating (1-5):
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Feedback:
            <textarea
              name="feedback"
              value={newReview.feedback}
              onChange={handleInputChange}
              rows="4"
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackAndReviews;
