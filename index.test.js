const parse = require('./index')
const testData = [{
  input: "When he was younger he got himself contaminated by a strain of varicellovirus",
  expected: [{
    "ngram": "varicellovirus",
    "value": {
      "id": "varicellovirus",
      "label": {
        "en": "Varicellovirus"
      },
      "description": {
        "en": "Varicellovirus"
      },
      "category": "genera",
      "aliases": {
        "en": [
          "Varicellovirus",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 12,
      "begin": 63,
      "end": 77
    }
  }]
}, {
  input: "I always have trouble pronouncing gammalipothrixvirus correctly",
  expected: [{
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
  }]
}, {
  input: "The plague of 2075 was caused by a variant of the zaire ebolavirus, not the reptilian orthoreovirus.",
  expected: [{
    "ngram": "zaire ebolavirus",
    "value": {
      "id": "zaire-ebolavirus",
      "label": {
        "en": "Zaire ebolavirus"
      },
      "description": {
        "en": "Zaire ebolavirus"
      },
      "category": "species",
      "aliases": {
        "en": [
          "Zaire ebolavirus",
          "Zaïre ebolavirus"
        ],
      }
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 11,
      "begin": 50,
      "end": 66
    }
  }, {
    "ngram": "reptilian orthoreovirus",
    "value": {
      "id": "reptilian-orthoreovirus",
      "label": {
        "en": "Reptilian orthoreovirus"
      },
      "description": {
        "en": "Reptilian orthoreovirus"
      },
      "category": "species",
      "aliases": {
        "en": [
          "Reptilian orthoreovirus",
        ],
      }
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 16,
      "begin": 76,
      "end": 99
    }
  }]
}, {
  input: "Since the Finkel-Biskis-Jinkins murine sarcoma virus outbreak, nobody cares about the mycobacterium phage rockyhorror anymore",
  expected: [{
    "ngram": "Finkel-Biskis-Jinkins murine sarcoma virus",
    "value": {
      "id": "finkel-biskis-jinkins-murine-sarcoma-virus",
      "label": {
        "en": "Finkel-Biskis-Jinkins murine sarcoma virus"
      },
      "description": {
        "en": "Finkel-Biskis-Jinkins murine sarcoma virus"
      },
      "category": "species",
       "aliases": {
        "en": [
          "Finkel-Biskis-Jinkins murine sarcoma virus",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 2,
      "begin": 10,
      "end": 52
    }
  }, {
    "ngram": "mycobacterium phage rockyhorror",
    "value": {
      "id": "mycobacterium-phage-rockyhorror",
      "label": {
        "en": "Mycobacterium phage rockyhorror"
      },
      "description": {
        "en": "Mycobacterium phage rockyhorror"
      },
      "category": "species",
      "aliases": {
        "en": [
          "Mycobacterium phage rockyhorror",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 12,
      "begin": 86,
      "end": 117
    }
  }]
}]

test('extract viruses', () => Promise.all(
  testData.map(async ({ input, expected }) => expect(await parse(input)).toEqual(expected))
))