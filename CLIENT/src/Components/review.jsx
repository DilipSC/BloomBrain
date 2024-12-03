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
    reaction: "",
    feedback: "",
  });

  const reactions = ["😀", "🙂", "😐", "☹️", "😡"];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReactionClick = (reaction) => {
    setNewReview({ ...newReview, reaction });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.reaction && newReview.feedback) {
      const reviewsCollection = collection(db, "reviews");
      await addDoc(reviewsCollection, {
        ...newReview,
        timestamp: serverTimestamp(),
      });
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", reaction: "", feedback: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleReset = () => {
    setNewReview({ name: "", reaction: "", feedback: "" });
  };

  const handleSaveAsDraft = () => {
    alert("Saved as draft! (Local save functionality can be added)");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-3xl font-semibold text-green-600 text-center">
        Feedback and Reviews
      </h2>

      {/* Reviews Section */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg bg-gray-50"
          >
            <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
            <p className="text-xl my-2">Reaction: {review.reaction}</p>
            <p className="text-gray-700">{review.feedback}</p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-700">
          Leave Your Feedback
        </h3>

        <div className="space-y-2">
          <label className="block text-gray-600 font-medium">
            Name:
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 font-medium">Reaction:</p>
          <div className="flex gap-4">
            {reactions.map((reaction, index) => (
              <span
                key={index}
                className={`text-2xl cursor-pointer transition-transform transform ${
                  newReview.reaction === reaction
                    ? "scale-125 text-green-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleReactionClick(reaction)}
              >
                {reaction}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-600 font-medium">
            Feedback:
            <textarea
              name="feedback"
              value={newReview.feedback}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSaveAsDraft}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Save as Draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackAndReviews;
