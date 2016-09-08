using System;

namespace ClassLibraryRepository
{
	public class ItemInfo
	{
		public int id { get; set; }
		public string title { get; set; }
		public string information { get; set; }
		public int item_id { get; set; }
		public ItemInfo()
		{
			
		}
		public ItemInfo(int nId, string nTitle, string nInformation, int nItem_id) {
			this.id = nId;
			this.title = nInformation;
			this.information = nInformation;
			this.item_id = nItem_id;
		}
	}
}

