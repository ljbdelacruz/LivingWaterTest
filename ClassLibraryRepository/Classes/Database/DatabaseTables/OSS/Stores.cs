using System;
using ClassLibraryRepository;
using System.Collections.Generic;

namespace ClassLibraryRepository.Classes.Database.OSS
{
	public class Stores
	{
		#region properties
		public int id { get; set; }
		public int owner_id { get; set; }
		public Images background;
		public List<Products> products;

		#endregion
		public Stores(int nId, int nOwner_id, Images background)
		{
			
		}
		public void appendProducts(Products prod) {
			this.products.Add(prod);
		}
	}
}

