import reviews from '../data/reviews.js';

const reviewsContainer = document.getElementById('reviewsContainer');
const reviewsButtons = document.getElementById('reviewsButtons');

let currentStep = 1;

swipeReviews(currentStep);

setInterval(() => {
  if (currentStep >= 3) {
    currentStep = 1;
  } else {
    currentStep++;
  }
  swipeReviews(currentStep);
}, 4000);


function removeReviews() {
  while (reviewsContainer.children.length > 0 ) {
    reviewsContainer.removeChild(reviewsContainer.children[0]);
  }
}

function swipeReviews(step) {
  removeReviews();
  const leftReviewIndex = (step * 2) - 2;
  const rightReviewIndex = leftReviewIndex + 1 ;
  const leftReview = createReview(reviews[leftReviewIndex]);
  const rightReview = createReview(reviews[rightReviewIndex]);
  reviewsContainer.append(leftReview);
  reviewsContainer.append(rightReview);
  inlightStepButton(step);
}

function inlightStepButton(step) {
  Object.values(reviewsButtons.children).forEach((element, index) => {
    if( (step-1) == index) {
      element.className = 'active';
    } else {
      element.className = '';
    }
  });
}

function createReview(reviewObj){
  const review = document.createElement('div');
  review.className = reviewObj.class;

  const reviewBlock = document.createElement('div');
  reviewBlock.className = 'review-block';
  review.append(reviewBlock);

  const photoBlock = document.createElement('div');
  photoBlock.classList.add(reviewObj.photoClass);
  photoBlock.classList.add(reviewObj.imgClass);
  reviewBlock.append(photoBlock);

  const desciption = document.createElement('p');
  desciption.innerHTML = reviewObj.desciption;
  reviewBlock.append(desciption);

  const author = document.createElement('span');
  author.innerHTML = reviewObj.author;
  reviewBlock.append(author);

  const address = document.createElement('small');
  address.innerHTML = reviewObj.address;
  reviewBlock.append(address);
  return review;
}