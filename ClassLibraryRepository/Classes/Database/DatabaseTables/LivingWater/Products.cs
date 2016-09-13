using System;
using System.Collections.Generic;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
namespace ClassLibraryRepository
{
	public class Products
	{
		#region properties
		public int id { get; set; }
        public string genre { get; set; }
        public List<ProductItem> items;
		#endregion

		#region constructors
		public Products(int nId, string nGenre) {
            this.id = nId;
            this.genre = nGenre;
            this.items = new List<ProductItem>();
		}
        #endregion
        public void appendProductItem(ProductItem pi) {
            this.items.Add(pi);
        }
	}
}

