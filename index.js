class Transformer {
  static mimeTypes () {
    return ['image/jpeg']
  }

  parse (source) {
    console.log(source)

    return {
      source
    }
  }

  extendNodeType ({ graphql }) {
    return {
    }
  }
}

module.exports = Transformer