using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class ProductItem
    {
        public int id { get; set; }
        public string item { get; set; }
        public double price { get; set; }
        public string source { get; set; }
        public int stock { get; set; }
        public int product_id { get; set; }
        public string content { get; set; }

        public ProductItem(int nId, string nItem, double nPrice, string nSource, int nStock, int nProduct_id) {
            this.id = nId;
            this.item = nItem;
            this.price = nPrice;
            this.source = nSource;
            this.stock = nStock;
            this.product_id = nProduct_id;
            this.content = "Hello";
        }
    }
}
