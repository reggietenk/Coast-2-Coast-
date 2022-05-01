export const getReviewIds = () => {
  const reviewIds = localStorage.getItem('review')
    ? JSON.parse(localStorage.getItem('review'))
    : [];

  return reviewIds;
};

export const saveReviewIds = (reviewIdArr) => {
  if (reviewIdArr.length) {
    localStorage.setItem('review', JSON.stringify(reviewIdArr));
  } else {
    localStorage.removeItem('review');
  }
};

export const removeReviewId = (reviewId) => {
  const savedReviewIds = localStorage.getItem('review')
    ? JSON.parse(localStorage.getItem('review'))
    : null;

  if (!savedReviewIds) {
    return false;
  }

  const updatedReviewIds = savedReviewIds?.filter((savedReviewId) => savedReviewId !== reviewId);
  localStorage.setItem('review', JSON.stringify(updatedReviewIds));

  return true;
};