import { useState } from "react";
import BookCard from "./components/BookCard";
import "./App.css";

function App() {

  // État des livres
  const [books, setBooks] = useState([
    { id: 1, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
    { id: 2, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: false },
    { id: 3, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true },
    { id: 4, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true }
  ]);

  // États du formulaire
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  // Nombre de livres disponibles
  const nombreDisponibles = books.filter(
    (book) => book.estDisponible
  ).length;

  // Fonction pour emprunter ou rendre un livre
  function onClickEmprunt(bookId) {

    setBooks(
      books.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book
      )
    );

  }

  // Fonction pour ajouter un livre
  function ajouterLivre(e) {

    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouveauLivre = {
      id: Date.now(),
      titre: titre,
      auteur: auteur,
      estDisponible: true
    };

    setBooks([...books, nouveauLivre]);

    setTitre("");
    setAuteur("");

  }

  return (
    <div className="container">

      <h1>Bibliothèque Universitaire</h1>

      <h2>
        Nombre de livres disponibles : {nombreDisponibles}
      </h2>

      {/* Formulaire d'ajout */}
      <div className="formulaire">

        <h2>Ajouter un nouveau livre</h2>

        <form onSubmit={ajouterLivre}>

          <input
            type="text"
            placeholder="Titre du livre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />

          <input
            type="text"
            placeholder="Nom de l'auteur"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
          />

          <button type="submit">
            Ajouter le livre
          </button>

        </form>

      </div>

      {/* Affichage des livres */}
      <h2>Catalogue des livres</h2>

      <div className="books-container">

        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => onClickEmprunt(book.id)}
          />
        ))}

      </div>

    </div>
  );
}

export default App;