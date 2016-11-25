1. obiekt książka: konstruktor, gettery do wszystkich pól, settery do wszystkich oprócz id (przerobić Usera z ćwiczenia na pola book)
2. dodać funkcję jsonSerialize:

public function jsonSerialize() {
return [
	'id'	=> $this->id,
	'name'	=> $this->name,
	'author'=> $this->author

tablica w bazie danych -> wyepłnic przykładowymi książkami

3. books.php:
- obsługa 4 różnych sposobów wywołania skryptu books.php
 a) wyświetl nagłówek (treść zwracana jason): header('content-type: application/json');

 b) inlude_once ('db.config.inc.php');
    
wczytać wszystkie ksiązki z bazy danych
umieścić w tablicy
echo json_encode($books);

