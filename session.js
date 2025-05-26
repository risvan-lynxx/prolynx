const axios = require("axios");

const token = "51b0050e177d97a58395d58c94bc342e1700a0f1ee544a01dc88e92057b06a853be2514cc22004be948f43ca84ccbc650f20f6d82daa2402c400087b145d194c";

async function create(data) {
  try {
    const config = {
      method: 'post',
      url: 'https://hastebin.com/documents',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'  
      },
      data: JSON.stringify({ content: data })  
    };

    const response = await axios(config);
    return { id: response.data.key };  
  } catch (error) {
    throw new Error(`Error creating document: ${error.message}`);
  }
}

async function get(key) {
  try {
    const config = {
      method: 'get',
      url: `https://hastebin.com/raw/${key}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const response = await axios(config);
    return response.data
  } catch (error) {
    throw new Error(`Error getting document: ${error.message}`);
  }
}

module.exports = { create, get };
