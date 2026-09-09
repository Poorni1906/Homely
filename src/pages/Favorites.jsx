import { ArrowLeft, Heart, Trash2 } from "lucide-react";

function Favorites({ favorites = [], onBackHome, onRemoveFavorite }) {
  return (
    <div className="favorites-page">

      {/* Top Bar */}
      <header className="favorites-topbar">

        <button
          type="button"
          className="back-button"
          onClick={onBackHome}
        >
          <ArrowLeft size={20} />
        </button>

        <div>
          <h1>Favorites</h1>
          <span>Your saved services</span>
        </div>

      </header>

      {/* Content */}
      <main className="favorites-content">

        <div className="favorites-heading">
          <div>
            <h2>Saved Favorites</h2>
            <p>Services you want to book later</p>
          </div>

          <div className="favorites-count">
            {favorites.length}
          </div>
        </div>

        {/* Empty State */}
        {favorites.length === 0 && (
          <div className="favorites-empty">

            <div className="favorites-empty-icon">
              <Heart size={36} />
            </div>

            <h2>No favorites yet</h2>

            <p>
              Save services you like and find them quickly here.
            </p>

            <button
              type="button"
              className="browse-favorites-button"
              onClick={onBackHome}
            >
              Browse Services
            </button>

          </div>
        )}

        {/* Favorites List */}
        {favorites.length > 0 && (
          <div className="favorites-grid">

            {favorites.map((favorite) => (
              <div
                className="favorite-card"
                key={favorite.id}
              >

                <div className="favorite-card-image">
                  <img
                    src={favorite.image}
                    alt={favorite.service}
                  />
                </div>

                <div className="favorite-card-content">

                  <h3>{favorite.service}</h3>

                  <p>{favorite.category}</p>

                  <div className="favorite-card-bottom">

                    <strong>
                      Starting from ₹299
                    </strong>

                    <button
                      type="button"
                      className="favorite-remove-button"
                      onClick={() =>
                        onRemoveFavorite(favorite.id)
                      }
                    >
                      <Trash2 size={17} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </main>

    </div>
  );
}

export default Favorites;