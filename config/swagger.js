import swaggerJSDoc from "swagger-jsdoc";

const options = {

  definition: {

    openapi: "3.0.0",

    info: {

      title: "Portfolio API",

      version: "1.0.0",

      description: "API para gestionar ilustraciones"

    },

    servers: [

      {
        url: "http://localhost:3000"
      }

    ]

  },

  apis: ["./routes/*.js"]

};

export const swaggerSpec = swaggerJSDoc(options);