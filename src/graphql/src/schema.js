export default `
  type MpesaApi {
    _id: String
    text: String
  }

  type Query {
    getb2c: [B2c]
  }

  schema {
    query: Query
  }

  type Mutaton {
    createb2b(text: String!)
  }
`;