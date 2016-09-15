using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util
{
    public class DatabaseQuery
    {
        public DatabaseQuery() {

        }
        #region products
        public string insertProduct(Products prod, string query) {
            return query + "INSERT INTO products(genre) values('" + prod.genre + "');";
        }
        public string findProductID(string genre) {
            return "SELECT id from products WHERE genre='"+genre+"'; ";
        }
        #endregion
    }
}
