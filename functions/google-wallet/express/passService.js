const jwt = require("jsonwebtoken");
const { classId, baseUrl, issuerId } = require("./config");
const { getCredentials } = require("./auth");
const { buildHttpClient } = require("./auth");

const createPassClassIfNotExists = async () => {
  let genericClass = {
    id: `${classId}`,
    classTemplateInfo: {
      cardTemplateOverride: {
        cardRowTemplateInfos: [
          {
            twoItems: {
              startItem: {
                firstValue: {
                  fields: [
                    {
                      fieldPath: 'object.textModulesData["points"]',
                    },
                  ],
                },
              },
              endItem: {
                firstValue: {
                  fields: [
                    {
                      fieldPath: 'object.textModulesData["contacts"]',
                    },
                  ],
                },
              },
            },
          },
        ],
      },
      detailsTemplateOverride: {
        detailsItemInfos: [
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.imageModulesData["event_banner"]',
                  },
                ],
              },
            },
          },
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.textModulesData["game_overview"]',
                  },
                ],
              },
            },
          },
          {
            item: {
              firstValue: {
                fields: [
                  {
                    fieldPath: 'class.linksModuleData.uris["official_site"]',
                  },
                ],
              },
            },
          },
        ],
      },
    },
    imageModulesData: [
      {
        mainImage: {
          sourceUri: {
            uri: "https://storage.googleapis.com/wallet-lab-tools-codelab-artifacts-public/google-io-2021-card.png",
          },
          contentDescription: {
            defaultValue: {
              language: "en-US",
              value: "Google I/O 2022 Banner",
            },
          },
        },
        id: "event_banner",
      },
    ],
    textModulesData: [
      {
        header: "Gather points meeting new people at Google I/O",
        body: "Join the game and accumulate points in this badge by meeting other attendees in the event.",
        id: "game_overview",
      },
    ],
    linksModuleData: {
      uris: [
        {
          uri: "https://io.google/2022/",
          description: "Official I/O '22 Site",
          id: "official_site",
        },
      ],
    },
  };

  const httpClient = buildHttpClient();

  // console.log("http", `${baseUrl}/genericClass/${classId}`);

  let response;
  try {
    await httpClient.request({
      url: `${baseUrl}/genericClass/${classId}`,
      method: "GET",
    });
  } catch (err) {
    if (err.response && err.response.status === 404) {
      response = await httpClient.request({
        url: `${baseUrl}/genericClass`,
        method: "POST",
        data: genericClass,
      });

      throw new Error(response);
    } else {
      // console.log(err);
      throw new Error(err);
    }
  }
};

const getUrlAddToGoogleWallet = async (email) => {
  let objectSuffix = `${email.replace(/[^\w.-]/g, "_")}`;
  let objectId = `${issuerId}.${objectSuffix}`;

  let genericObject = {
    id: `${objectId}`,
    classId: classId,
    genericType: "GENERIC_TYPE_UNSPECIFIED",
    hexBackgroundColor: "#4285f4",
    logo: {
      sourceUri: {
        uri: "https://i.imgur.com/kXaImK2.png",
      },
    },
    cardTitle: {
      defaultValue: {
        language: "en",
        value: "Sindicato dos Bancários de Uberlândia",
      },
    },
    subheader: {
      defaultValue: {
        language: "en",
        value: "Associado",
      },
    },
    header: {
      defaultValue: {
        language: "en",
        value: "Pablo morumbi",
      },
    },
    barcode: {
      type: "QR_CODE",
      // 'value': `${objectId}`
      value: `http://google.com`,
    },
    heroImage: {
      sourceUri: {
        uri: "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
    textModulesData: [
      {
        header: "Email",
        body: "pablodomorumbi@gmail.com",
        id: "email",
      },
      {
        header: "Telefone",
        body: "(34) 99999.9999",
        id: "phone",
      },
    ],
  };

  const credentials = getCredentials();

  const claims = {
    iss: credentials.client_email,
    aud: "google",
    origins: [],
    typ: "savetowallet",
    payload: {
      genericObjects: [genericObject],
    },
  };

  const token = jwt.sign(claims, credentials.private_key, {
    algorithm: "RS256",
  });

  return `https://pay.google.com/gp/v/save/${token}`;
}

const createButton = async (email) => {
  await createPassClassIfNotExists();
  return await getUrlAddToGoogleWallet(email);
}

module.exports = {
  createButton,
};
