'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    getAllUsers: async (ctx) => {
        var data = await strapi.query("remote-config").find({ type: "user" });

        var modifiedList = [];

        data.forEach((user) => {
            modifiedList.push({
              mail: user.Email,
              empresa: user.Empresa,
              id: user.Id,
              lastLevel: user.LastLevel,
              sede: user.Sede,
              name: user.UserName,
            });
          });

        
    
        return modifiedList;
      },
};
