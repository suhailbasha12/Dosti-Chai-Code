import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer1 from '../Component/Footer1';
import { FaStar } from 'react-icons/fa';
import Img from '../assets/imges/bbg1.jpg'; // Make sure the path is correct

type Review = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

// Simulate admin status
const isAdmin = true;

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [editReview, setEditReview] = useState<Review | null>(null);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever the reviews state changes
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Handle form submission and send to Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editReview) {
      // Update existing review
      const updatedReviews = reviews.map((r) =>
        r.id === editReview.id
          ? { ...r, name, review, rating }
          : r
      );
      setReviews(updatedReviews);
      setEditReview(null);
    } else {
      // Add new review
      const newReview: Review = {
        id: Date.now(),
        name,
        review,
        rating,
      };

      setReviews((prevReviews) => [...prevReviews, newReview]);
    }

    setName('');
    setReview('');
    setRating(5);
    setIsFormVisible(false);

    // Send review to Formspree
    try {
      const response = await fetch('https://formspree.io/f/meojdgry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          review,
          rating,
        }),
      });

      if (response.ok) {
        alert('Your review has been submitted!');
      } else {
        alert('There was an issue submitting your review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting your review.');
    }
  };

  // Handle review edit
  const handleEdit = (review: Review) => {
    setEditReview(review);
    setName(review.name);
    setReview(review.review);
    setRating(review.rating);
    setIsFormVisible(true);
  };

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div
        className="container mx-auto p-4 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${Img})`, // Correct background image
        }}
      >
        <div className="p-8 min-h-screen bg-opacity-80">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">What our customers say</h2>

          {/* Toggle Write a Review Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => {
                setIsFormVisible(!isFormVisible);
                if (editReview) {
                  setEditReview(null); // Reset edit mode when toggling form visibility
                }
              }}
              className="bg-[#020617] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#46141b] transition duration-300"
            >
              {isFormVisible ? 'Cancel' : editReview ? 'Edit Review' : 'Write a Review'}
            </button>
          </div>

          {/* Review Form */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">{editReview ? 'Edit Review' : 'Submit a Review'}</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-600">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-600">Review</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-600">Rating</label>
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                {editReview ? 'Update Review' : 'Submit Review'}
              </button>
            </form>
          )}

          {/* Display Reviews */}
          <div className="mt-8 max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.length === 0 ? (
              <p className="text-center text-black">No reviews available</p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-start space-y-4"
                  style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-balck">{review.name}</h3>
                      <p className="text-black text-sm">Posted on {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="mt-2">{renderStars(review.rating)}</div>
                  <p className="text-black">{review.review}</p>
                  {isAdmin && (
                    <div className="mt-4 flex justify-end w-full">
                      <button
                        onClick={() => handleEdit(review)}
                        className="px-2 py-1 bg-[#be123c] text-white rounded-lg hover:bg-blue-900 transition duration-300"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Review;
