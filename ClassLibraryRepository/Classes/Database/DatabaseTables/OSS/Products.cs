using System;
using ClassLibraryRepository;
using System.Collections.Generic;


namespace ClassLibraryRepository.Classes.Database.OSS
{
	public class Products
	{
		#region properties
		public int id { get; set; }
		public int store_id { get; set; }
		public string genre { get; set; }
		public List<Item> items;

		#endregion

		public Products(int nId, int nStore_id, string nGenre)
		{
			this.id = nId;
			this.store_id = nStore_id;
			this.genre = nGenre;
			this.items = new List<Item>();
		}

		public void appendItem(Item itm) {
			this.items.Add(itm);
		}
	}
}

