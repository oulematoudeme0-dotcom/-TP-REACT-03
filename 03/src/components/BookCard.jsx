function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div className="book-card">

      <h2>{titre}</h2>

      <p>Auteur : {auteur}</p>

      <p className={estDisponible ? "disponible" : "emprunte"}>
        {estDisponible ? "Disponible" : "Emprunté"}
      </p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>

    </div>
  );
}

export default BookCard;