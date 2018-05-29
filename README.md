# Parse Viruses

If a virus, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-viruses

## Usage

Example:

```javascript
await parse('I always have trouble pronouncing gammalipothrixvirus correctly')
```

Output:

```json
[
  {
    "ngram": "gammalipothrixvirus",
    "value": {
      "id": "gammalipothrixvirus",
      "label": {
        "en": "Gammalipothrixvirus"
      },
      "description": {
        "en": "Gammalipothrixvirus"
      },
      "category": "genera",
      "aliases": {
        "en": [
          "Gammalipothrixvirus",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 5,
      "begin": 34,
      "end": 53
    }
  }
]
```
