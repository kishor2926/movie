// A database of movie suggestions
const movies = [
    { title: "Interstellar", genre: "Sci-Fi", rating: "⭐ 8.7/10", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { title: "Inception", genre: "Sci-Fi / Action", rating: "⭐ 8.8/10", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task." },
    { title: "Parasite", genre: "Drama / Thriller", rating: "⭐ 8.5/10", desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between two families." },
    { title: "The Dark Knight", genre: "Action / Crime", rating: "⭐ 9.0/10", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
    { title: "Spirited Away", genre: "Animation / Fantasy", rating: "⭐ 8.6/10", desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts." },
    { title: "Whiplash", genre: "Drama / Music", rating: "⭐ 8.5/10", desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential." }
];

// Find elements on the page
const suggestBtn = document.querySelector('.cta-btn');
const movieCards = document.querySelectorAll('.movie-card');

// Function to randomly mix and update movies when the button is clicked
suggestBtn.addEventListener('click', () => {
    // Shuffles our movie database array randomly
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    
    // Update the 3 cards on screen with new random movies
    movieCards.forEach((card, index) => {
        const badge = card.querySelector('.badge');
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const rating = card.querySelector('.rating');
        
        badge.textContent = shuffled[index].genre;
        title.textContent = shuffled[index].title;
        desc.textContent = shuffled[index].desc;
        rating.textContent = shuffled[index].rating;
    });
});
