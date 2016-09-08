using System;
using System.Collections.Generic;



namespace ClassLibraryRepository
{
	public class ProductManager
	{
		public List<Products> products;
		public ProductManager()
		{
			products = new List<Products>();
		}
		public void init() { 
			//this is for dummy data

		}
		public void loadData() { 
			//this load the data from database
		}

		#region filters
		public List<Products> filterByType(int type) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].numtype == type) {
					temp.Add(this.products[i]);
				}
			}
			return temp;
		}
		//filter by product name
		public List<Products> filterByProductName(string search) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].productName.Contains(search)) {
					temp.Add(products[i]);
				}
			}
			return temp;
		}


		#endregion
	}
}

