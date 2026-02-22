const { createButton } = require("./express/passService")

const handler = async (event) => {
  try {
    const url = await createButton('fulano@gmail.com');

    return {
      statusCode: 200,
      body: JSON.stringify({ url: url }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
