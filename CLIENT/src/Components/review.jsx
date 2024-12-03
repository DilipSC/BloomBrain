import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  apiKey: "AIzaSyCY-L2PDawMFd9rYaMUE4DZIWvuIKprx7M",
  authDomain: "bloom-brain.firebaseapp.com",
  projectId: "bloom-brain",
  storageBucket: "bloom-brain.firebasestorage.app",
  messagingSenderId: "252418327612",
  appId: "1:252418327612:web:5df2e8e8d28c198330ef39"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const reactions = ["😡", "☹️", "😐", "🙂", "😀"];

const reactionFeedbackMap = {
  "😀": "I'm thrilled with this experience!",
  "🙂": "I'm quite satisfied with this.",
  "😐": "It's okay, nothing special.",
  "☹️": "I'm disappointed and expected better.",
  "😡": "This was a frustrating experience.",
};

const FeedbackAndReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    reaction: "",
    feedback: "",
  });
  const [drafts, setDrafts] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsList);
    };
    fetchReviews();

    // Load drafts from localStorage
    const savedDrafts = localStorage.getItem("reviewDrafts");
    if (savedDrafts) {
      setDrafts(JSON.parse(savedDrafts));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReactionClick = (reaction) => {
    setNewReview({
      ...newReview,
      reaction,
      feedback: reactionFeedbackMap[reaction] || "",
    });
  };

  const showToast = (title, description, isError = false) => {
    setToast({ title, description, isError });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.reaction && newReview.feedback) {
      const reviewsCollection = collection(db, "reviews");
      const docRef = await addDoc(reviewsCollection, {
        ...newReview,
        timestamp: serverTimestamp(),
      });
      setReviews([...reviews, { id: docRef.id, ...newReview }]);
      setNewReview({ name: "", reaction: "", feedback: "" });
      showToast("Review submitted", "Thank you for your feedback!");
    } else {
      showToast("Error", "Please fill out all fields!", true);
    }
  };

  const handleReset = () => {
    setNewReview({ name: "", reaction: "", feedback: "" });
  };

  const handleSaveAsDraft = () => {
    if (newReview.name || newReview.reaction || newReview.feedback) {
      const updatedDrafts = [...drafts, { ...newReview, id: Date.now() }];
      setDrafts(updatedDrafts);
      localStorage.setItem("reviewDrafts", JSON.stringify(updatedDrafts));
      setNewReview({ name: "", reaction: "", feedback: "" });
      showToast("Draft saved", "Your review has been saved as a draft.");
    } else {
      showToast("Error", "Cannot save an empty draft!", true);
    }
  };

  const loadDraft = (draft) => {
    setNewReview(draft);
    const updatedDrafts = drafts.filter((d) => d.id !== draft.id);
    setDrafts(updatedDrafts);
    localStorage.setItem("reviewDrafts", JSON.stringify(updatedDrafts));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-3xl font-semibold text-green-600 text-center">
        Feedback and Reviews
      </h2>

      {/* Reviews Section */}
      <AnimatePresence>
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-xl mb-2">Reaction: {review.reaction}</p>
            <p className="text-gray-700">{review.feedback}</p>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-700">
          Leave Your Feedback
        </h3>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="space-y-2">
          <p className="text-gray-600 font-medium text-center">Reaction:</p>
          <div className="flex justify-center gap-4">
            {reactions.map((reaction) => (
              <motion.button
                key={reaction}
                type="button"
                className={`text-2xl ${
                  newReview.reaction === reaction
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleReactionClick(reaction)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {reaction}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="feedback" className="block text-gray-600 font-medium">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={newReview.feedback}
            onChange={handleInputChange}
            rows="2"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSaveAsDraft}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save as Draft
          </button>
        </div>
      </form>

      {/* Drafts Section */}
      {drafts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Drafts</h3>
          <div className="space-y-4">
            {drafts.map((draft) => (
              <motion.div
                key={draft.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{draft.name || "Unnamed"}</p>
                  <p>{draft.reaction} {draft.feedback}</p>
                </div>
                <button
                  onClick={() => loadDraft(draft)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Load
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md ${
            toast.isError ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          <h4 className="font-semibold">{toast.title}</h4>
          <p>{toast.description}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackAndReviews;

