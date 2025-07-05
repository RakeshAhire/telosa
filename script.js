

const reviews = [
    {
        name: "Jacob Jones",
        time: "Jun 24, 2025 • 3:20 PM",
        stars: 5,
        text: "Great quality and attention to detail. Their designs elevated my brand. I just...",
        full: "Great quality and attention to detail. Their designs elevated my brand. I just loved everything they delivered.",
        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
        postedImages: [
            "", "", "",
        ]
    },
    {
        name: "Marvin McKinney",
        time: "Jun 24, 2025 • 3:20 PM",
        stars: 3,
        text: "The team is talented, but communication could be better...",
        full: "The team is talented, and their product was good, but communication could be better. I had to follow up multiple times to get updates. If they improve responsiveness, they’d be perfect.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        reply: {
            name: "You",
            time: "Jun 24, 2025 • 3:20 PM",
            text: `Really appreciate you taking the time to share this. I’m so glad to hear you liked the product and our team’s work — that truly means a lot`,
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        }
    },
    {
        name: "Lisa Williams",
        time: "Jun 24, 2025 • 3:20 PM",
        stars: 4,
        text: "Very satisfied with the product, but the delivery was slightly delayed...",
        full: "Very satisfied with the product, but the delivery was slightly delayed. Overall, I’d still recommend them!",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
];

const reviewContainer = document.getElementById("reviewContainer");
const clickedReviewContainer = document.getElementById("clickedReviewContainer");

function getStars(count) {
    return "★".repeat(count) + "☆".repeat(5 - count);
}

function renderReviewDetail(review) {
    const imagesHTML = review.postedImages && review.postedImages.length
        ? `<div class="posted-images">` +
        review.postedImages.map(img => `<img class="posted-image" src="${img}" />`).join('') +
        `</div>`
        : '';

    clickedReviewContainer.innerHTML = `
        <div class="selected-review">
            <div class="review-header">
                <img class="review-avatar" src="${review.avatar}" />
                <div class="review-details">
                    <h2>${review.name}</h2>
                    <p class="reply-time">${review.time}</p>
                    <div class="stars">${getStars(review.stars)}</div>
                    <p class="reply-text">${review.full}</p>
                    ${imagesHTML}
                </div>
            </div>
        </div>
        ${review.reply ? `
            <div class="reply-section">
                <div class="reply-header">
                    <img class="reply-avatar" src="${review.reply.avatar}" />
                    <strong>${review.reply.name}</strong>
                    <span class="reply-time">${review.reply.time}</span>
                </div>
                <p>${review.reply.text}</p>
            </div>
        ` : ''}
    `;
}


reviews.forEach((review, index) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
        <div class="avatar" style="background-image: url('${review.avatar}')"></div>
        <div class="review-content">
            <div class="name">${review.name}</div>
            <div class="stars">${getStars(review.stars)}</div>
            <div class="text">${review.text}</div>
        </div>
        <div class="time">${review.time}</div>
    `;

    card.addEventListener("click", () => renderReviewDetail(review));

    reviewContainer.appendChild(card);
});

// Show the first review by default
if (reviews.length > 0) {
    renderReviewDetail(reviews[0]);
}
