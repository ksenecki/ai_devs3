### Opis systemu API

Ten element naszego poligonu ma przygotować Cię do integracji z API, z którym przyjdzie Ci pracować w 2024 roku.

### Pobieranie treści zadania

Dane wejściowe, na których przyjdzie Ci pracować, będą pochodzić z różnych systemów. Nie możemy zapewnić ich spójnej struktury, czy nawet formatu (niekiedy będzie to tekst, obraz, czy nawet dźwięk) ponieważ nie wiemy, jakiego rodzaju dane uda Ci się pozyskać podczas Twojej misji. Zrobimy jednak wszystko, aby przystosować Cię do pracy z wszelkimi rodzajami danych.

### Wysyłanie odpowiedzi

API przyjmuje dane wysłane metodą POST w formacie JSON w strukturze jak poniżej:

```
{
    "task": "identyfikator zadania",
    "apikey": "Twój klucz API",
    "answer": "tutaj Twoja odpowiedź"
}
```
Twoja odpowiedź może niekiedy być tablicą, więc koniecznie doczytaj o tym, jak buduje się poprawnego JSON-a.

To jest ŹLE zbudowana odpowiedź:
```
{
    "task": 1234,
    "apikey": "Twój klucz API",
    "answer": "[0,1,2,3,4]"
}
```

To jest DOBRZE zbudowana odpowiedź:
```
{
    "task": 1234,
    "apikey": "Twój klucz API",
    "answer": [0,1,2,3,4]
}
```

Powyższa odpowiedź, aby była tablicą, a nie stringiem, powinna być przesłana tak:
```
{
    "task": 1234,
    "apikey": "Twój klucz API",
    "answer": [0,1,2,3,4]
}
```

Oba zapisy są strukturalnie poprawne, ale semantycznie zupełnie różne. Jeśli nie widzisz różnicy, możesz spróbować zwizualizować oba te JSON-y za pomocą [tego narzędzia](https://jsoneditoronline.org/).

### Zwracane wartości

API odpowiada także w formacie JSON w strukturze jak poniżej.

```
{
    "code": 0,
    "message": "Komunikat zwrotny",
}
```

Kod równy 0 (zero) oznacza akceptację odpowiedzi przez centralę.

Wszystkie kody ujemne informują Cię, że centrala nie akceptuje przesłanych danych i prosi o ich poprawienie. Notka o tym, dlaczego tak się dzieje, będzie zawarta w polu "message".

### Sprawdź swoje umiejętności

Pod poniższym adresem znajdują się dwa ciągi znaków (uwaga! Zmieniają się co jakiś czas, więc nie wpisuj ich na sztywno w kodzie!).

https://poligon.aidevs.pl/dane.txt

Twoim zadaniem jest pobranie ich i odesłanie jako tablicy stringów do endpointa API:

`https://poligon.aidevs.pl/verify`

Nazwa zadania: `POLIGON`
Twój klucz API: `ai_devs3_api_key`

### Bezpieczeństwo

Twój klucz API jest stały i nie zmieni się on nawet po podróży w czasie.

Dbaj o to, aby ten klucz nie wyciekł. Nie umieszczaj go w kodzie w publicznych repozytoriach i nie wklejaj do [przestrzeni, w której rozmawiają inni agenci](https://bravecourses.circle.so/c/prework-ai3/).

Nie możemy dopuścić do tego, aby siły wroga uzyskały klucze dostępowe do kontaktu z centralą. Mogłoby to doprowadzić do zatrucia naszych źródeł danych, a wtedy cała Twoja misja nie miałaby sensu.