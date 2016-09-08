using System;
namespace ClassLibraryRepository.Classes.Database.OSS
{
	public class Item
	{
		public int id { get; set; }
		public string item { get; set; }
		public double price { get; set; }
		public Images source { get; set; }
		public int quantity { get; set; }
		public int store_id { get; set; }

		public Item() { 
			
		}
		public Item(int nId, string nItem, double nPrice, Images nSource, int nQuantity, int nStore_id)
		{
			this.id = nId;
			this.item = nItem;
			this.price = nPrice;
			this.source = nSource;
			this.quantity = nQuantity;
			this.store_id = nStore_id;
		}
	}
}

