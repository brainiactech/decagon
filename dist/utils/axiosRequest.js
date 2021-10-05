"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosRequest = async (name, isFullText) => {
    const axios = require('axios');
    const url = `${process.env.Country_Url}name/${name}?access_key=${process.env.API_KEY}&FullText=${isFullText}`;
    try {
        const response = await axios.get(url);
        return response.data.filter(item => {
            const itemLowerCased = item.name.toLowerCase();
            const filtered = itemLowerCased.includes(name.toLowerCase());
            const checkLenght = filtered.length > 0;
            return {
                name: checkLenght ? filtered.name : '',
                region: checkLenght ? filtered.region : '',
                callingCodes: checkLenght ? filtered.callingCodes : [],
            };
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = axiosRequest;
//# sourceMappingURL=axiosRequest.js.map